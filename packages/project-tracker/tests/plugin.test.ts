import { existsSync, readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { parse } from 'yaml'

const packageRoot = path.resolve(import.meta.dirname, '..')
const skillsDir = path.join(packageRoot, 'skills')
const skills = existsSync(skillsDir) ? readdirSync(skillsDir) : []

function readJson(file: string): Record<string, unknown> {
	return JSON.parse(readFileSync(path.join(packageRoot, file), 'utf8')) as Record<string, unknown>
}

function frontmatter(file: string): Record<string, unknown> {
	const match = /^---\n([\s\S]*?)\n---\n/.exec(readFileSync(file, 'utf8'))
	if (!match) throw new Error(`${file} has no frontmatter`)
	return parse(match[1] as string) as Record<string, unknown>
}

describe('the shipped plugin', () => {
	it('is named project-tracker and published as cyber-project-tracker', () => {
		expect(readJson('plugin.json').name).toBe('project-tracker')
		expect(readJson('package.json').name).toBe('cyber-project-tracker')
	})

	it.skipIf(skills.length === 0).each(skills)(
		'%s names itself after its folder and has a short description',
		(skill) => {
			const meta = frontmatter(path.join(skillsDir, skill, 'SKILL.md'))
			expect(meta.name).toBe(skill)
			expect(typeof meta.description).toBe('string')
			expect((meta.description as string).length).toBeLessThanOrEqual(200)
		},
	)

	it.skipIf(skills.length === 0).each(skills)('%s links only to files that exist', (skill) => {
		const dir = path.join(skillsDir, skill)
		const body = readFileSync(path.join(dir, 'SKILL.md'), 'utf8')
		for (const [, target] of body.matchAll(/\]\(((?!https?:)[^)#]+)\)/g)) {
			expect(existsSync(path.join(dir, target as string)), `${skill} links ${target}`).toBe(true)
		}
	})

	it('keeps the package and plugin versions in step', () => {
		expect(readJson('plugin.json').version).toBe(readJson('package.json').version)
	})

	it('publishes everything the plugin needs', () => {
		const { files } = readJson('package.json') as { files: string[] }
		for (const entry of ['skills', 'references', 'plugin.json', '.claude-plugin', '.cursor-plugin', '.codex-plugin']) {
			expect(files).toContain(entry)
		}
	})
})

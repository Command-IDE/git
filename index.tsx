import React, { useCallback, useState } from 'react'
import type { Plugin, PluginTabProps } from '@cmdide/plugin-sdk'
import './git.css'

type GitView = 'changes' | 'history' | 'remotes'

function GitTab({ context }: PluginTabProps) {
  const { cwd, executeCommand } = context
  const [view, setView] = useState<GitView>('changes')
  const [commitMsg, setCommitMsg] = useState('')
  const [output, setOutput] = useState('')

  const exec = useCallback((cmd: string) => {
    if (executeCommand) {
      executeCommand(cmd)
      setOutput(`▶ ${cmd}`)
    }
  }, [executeCommand])

  const handleCommit = () => {
    if (!commitMsg.trim()) return
    exec(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`)
    setCommitMsg('')
  }

  const quickActions = [
    { label: 'git pull',               cmd: 'git pull' },
    { label: 'git push',               cmd: 'git push' },
    { label: 'git fetch',              cmd: 'git fetch' },
    { label: 'git status',             cmd: 'git status' },
    { label: 'git log --oneline -10',  cmd: 'git log --oneline -10' },
    { label: 'git diff',               cmd: 'git diff' },
  ]

  return (
    <div className="git">
      <div className="git__tabs">
        {(['changes', 'history', 'remotes'] as const).map(v => (
          <button
            key={v}
            className={`git__tab${view === v ? ' git__tab--active' : ''}`}
            onClick={() => setView(v)}
          >{v}</button>
        ))}
        <div className="git__spacer" />
        <button
          className="git__refresh"
          onClick={() => exec('git status --short --branch')}
          title="Refresh"
        >↻</button>
      </div>

      {view === 'changes' && (
        <div className="git__changes">
          <div className="git__actions">
            {quickActions.map(a => (
              <button key={a.cmd} className="git__action" onClick={() => exec(a.cmd)}>
                {a.label}
              </button>
            ))}
          </div>

          <div className="git__commit-area">
            <textarea
              className="git__commit-msg"
              placeholder="Commit message… (Ctrl+Enter to commit)"
              value={commitMsg}
              onChange={e => setCommitMsg(e.target.value)}
              onKeyDown={e => { if (e.ctrlKey && e.key === 'Enter') handleCommit() }}
            />
            <div className="git__commit-row">
              <button
                className="git__btn git__btn--secondary"
                onClick={() => exec('git add -A')}
              >Stage all</button>
              <button
                className={`git__btn git__btn--primary${!commitMsg.trim() ? ' git__btn--disabled' : ''}`}
                onClick={handleCommit}
                disabled={!commitMsg.trim()}
              >Commit</button>
            </div>
          </div>

          {output && <div className="git__output">{output}</div>}
        </div>
      )}

      {view === 'history' && (
        <div className="git__history">
          <div className="git__actions">
            <button className="git__action" onClick={() => exec('git log --oneline -20')}>
              Show log (last 20)
            </button>
            <button className="git__action" onClick={() => exec('git log --oneline --graph --all -20')}>
              Show graph
            </button>
          </div>
          <div className="git__empty">
            Run a log command above — output appears in the terminal.
          </div>
        </div>
      )}

      {view === 'remotes' && (
        <div className="git__remotes">
          <div className="git__actions">
            <button className="git__action" onClick={() => exec('git remote -v')}>Show remotes</button>
            <button className="git__action" onClick={() => exec('git branch -a')}>All branches</button>
            <button className="git__action" onClick={() => exec('git stash list')}>Stash list</button>
          </div>
        </div>
      )}
    </div>
  )
}

const gitPlugin: Plugin = {
  id: 'git',
  name: 'Git Insights',
  description: 'GitHub Desktop-style git UI: stage, commit, pull/push, and branch management.',
  author: 'CMD IDE',
  version: '1.0.0',
  tabType: 'git',
  tabTitle: 'Git',
  githubUrl: 'https://github.com/Command-IDE/git',
  TabComponent: GitTab,
  commands: [
    { name: 'git', description: 'open Git Insights panel' },
  ],
}

export default gitPlugin

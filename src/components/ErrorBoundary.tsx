import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  /** When this value changes (e.g. the route path), the error state is cleared. */
  resetKey?: string
}
interface State { failed: boolean }

/** Catches render errors so a bug never leaves a blank page. */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false }

  static getDerivedStateFromError(): State {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack)
  }

  componentDidUpdate(prev: Props) {
    if (this.state.failed && prev.resetKey !== this.props.resetKey) {
      this.setState({ failed: false })
    }
  }

  render() {
    if (!this.state.failed) return this.props.children
    return (
      <section className="container page narrow">
        <h1>Something went wrong</h1>
        <p className="lead">This page failed to load. Reload to try again.</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>Reload page</button>
      </section>
    )
  }
}

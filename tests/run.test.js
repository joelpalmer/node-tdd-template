describe('when the application starts', () => {
  it('should run', () => {
    const isRunning = run()
    expect(isRunning).toBeGreaterThan(0)
  })
})
interface CounterState { count: number; }
class InteractiveButton {
  private state: CounterState = { count: 0 };
  constructor(private label: string) {}
  public renderHTML(): string {
    const text = `${this.label}: ${this.state.count}`;
    return `<button data-client="true">${text}</button>`;
  }
  public click(): void {
    this.state.count += 1;
  }
  public getCount(): number { return this.state.count; }
}
const btn = new InteractiveButton("Live Votes");
console.log(`Server prerender: ${btn.renderHTML()}`);
btn.click();
console.log(`Post-hydration click: count is ${btn.getCount()}`);

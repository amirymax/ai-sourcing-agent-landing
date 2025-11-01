// Простая «аналитика» — пока только console.log.
// Если потом подключим реальную аналитику — заменим реализацию здесь.
type EventPayload = Record<string, unknown>;

export function track(event: string, payload: EventPayload = {}) {
  const timestamp = new Date().toISOString();
  // eslint-disable-next-line no-console
  console.log(`[analytics] ${event}`, { ...payload, timestamp });
}

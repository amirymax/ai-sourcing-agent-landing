// src/api/interest.ts
export type InterestPayload = {
  email: string;
  company?: string;
  note?: string;
};

export type InterestResponse = {
  ok: boolean;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Мок POST /api/interest
 * Имитируем сетевой вызов и логируем входные данные.
 */
export async function postInterest(payload: InterestPayload): Promise<InterestResponse> {
  // имитируем сеть
  await sleep(700);
  // eslint-disable-next-line no-console
  console.log('[mock:/api/interest] received', payload);
  return { ok: true };
}

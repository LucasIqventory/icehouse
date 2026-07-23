export type ContactSource = 'cmv' | 'icehouse';

export interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  type?: string;
  message?: string;
  heardFrom?: string;
}

export interface SubmitContactRequest {
  name: string;
  email: string;
  source: ContactSource;
  phone?: string;
  type?: string;
  message?: string;
  'heard-from'?: string;
}

export interface ApiErrorBody {
  message?: string;
  error?: string;
  detail?: string;
  errors?: string[];
}

export interface ApiSuccessBody {
  message?: string;
}

export interface SubmitContactResult {
  ok: boolean;
  status: number | null;
  message: string;
}

export const CONTACT_SOURCE: ContactSource = 'icehouse';

const DEFAULT_API_BASE_URL = '';
const CONTACT_ENDPOINT_PATH = '/cmv-icehouse/submitContact/';

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
}

function toSubmitContactRequest(values: ContactFormValues, source: ContactSource): SubmitContactRequest {
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedPhone = values.phone?.trim() ?? '';
  const trimmedType = values.type?.trim() ?? '';
  const trimmedMessage = values.message?.trim() ?? '';
  const trimmedHeardFrom = values.heardFrom?.trim() ?? '';

  return {
    name: trimmedName,
    email: trimmedEmail,
    source,
    phone: trimmedPhone,
    type: trimmedType,
    message: trimmedMessage,
    'heard-from': trimmedHeardFrom,
  };
}

function extractMessage(body: ApiErrorBody | ApiSuccessBody | null, fallback: string): string {
  if (!body) {
    return fallback;
  }

  if ('errors' in body && Array.isArray(body.errors) && body.errors.length > 0) {
    return body.errors.join(', ');
  }

  if (typeof body.message === 'string' && body.message.trim()) {
    return body.message;
  }

  if ('error' in body && typeof body.error === 'string' && body.error.trim()) {
    return body.error;
  }

  if ('detail' in body && typeof body.detail === 'string' && body.detail.trim()) {
    return body.detail;
  }

  return fallback;
}

async function parseJsonBody(response: Response): Promise<ApiErrorBody | ApiSuccessBody | null> {
  const contentType = response.headers.get('content-type') ?? '';

  if (!contentType.toLowerCase().includes('application/json')) {
    return null;
  }

  try {
    return (await response.json()) as ApiErrorBody | ApiSuccessBody;
  } catch {
    return null;
  }
}

export async function submitContact(
  values: ContactFormValues,
  source: ContactSource,
): Promise<SubmitContactResult> {
  try {
    const apiBaseUrl = normalizeBaseUrl(import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL);
    const response = await fetch(`${apiBaseUrl}${CONTACT_ENDPOINT_PATH}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toSubmitContactRequest(values, source)),
    });

    const body = await parseJsonBody(response);

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        message: extractMessage(body, 'Message could not be sent right now.'),
      };
    }

    return {
      ok: true,
      status: response.status,
      message: extractMessage(body, 'Message sent. We will be in touch.'),
    };
  } catch {
    return {
      ok: false,
      status: null,
      message: 'Message could not be sent right now.',
    };
  }
}
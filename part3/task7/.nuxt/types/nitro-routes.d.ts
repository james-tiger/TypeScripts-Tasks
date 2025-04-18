// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/categories': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/categories').default>>>>
    }
    '/api/courses': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/courses.post').default>>>>
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/courses').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/handlers/renderer').default>>>>
    }
  }
}
export {}
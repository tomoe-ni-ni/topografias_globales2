
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Proyecto
 * 
 */
export type Proyecto = $Result.DefaultSelection<Prisma.$ProyectoPayload>
/**
 * Model Estado_documento
 * 
 */
export type Estado_documento = $Result.DefaultSelection<Prisma.$Estado_documentoPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Documento
 * 
 */
export type Documento = $Result.DefaultSelection<Prisma.$DocumentoPayload>
/**
 * Model Historial_documentos
 * 
 */
export type Historial_documentos = $Result.DefaultSelection<Prisma.$Historial_documentosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proyecto`: Exposes CRUD operations for the **Proyecto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proyectos
    * const proyectos = await prisma.proyecto.findMany()
    * ```
    */
  get proyecto(): Prisma.ProyectoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estado_documento`: Exposes CRUD operations for the **Estado_documento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estado_documentos
    * const estado_documentos = await prisma.estado_documento.findMany()
    * ```
    */
  get estado_documento(): Prisma.Estado_documentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documento`: Exposes CRUD operations for the **Documento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documentos
    * const documentos = await prisma.documento.findMany()
    * ```
    */
  get documento(): Prisma.DocumentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historial_documentos`: Exposes CRUD operations for the **Historial_documentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historial_documentos
    * const historial_documentos = await prisma.historial_documentos.findMany()
    * ```
    */
  get historial_documentos(): Prisma.Historial_documentosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Proyecto: 'Proyecto',
    Estado_documento: 'Estado_documento',
    Area: 'Area',
    Usuario: 'Usuario',
    Documento: 'Documento',
    Historial_documentos: 'Historial_documentos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "proyecto" | "estado_documento" | "area" | "usuario" | "documento" | "historial_documentos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Proyecto: {
        payload: Prisma.$ProyectoPayload<ExtArgs>
        fields: Prisma.ProyectoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProyectoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProyectoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          findFirst: {
            args: Prisma.ProyectoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProyectoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          findMany: {
            args: Prisma.ProyectoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>[]
          }
          create: {
            args: Prisma.ProyectoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          createMany: {
            args: Prisma.ProyectoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProyectoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>[]
          }
          delete: {
            args: Prisma.ProyectoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          update: {
            args: Prisma.ProyectoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          deleteMany: {
            args: Prisma.ProyectoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProyectoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProyectoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>[]
          }
          upsert: {
            args: Prisma.ProyectoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          aggregate: {
            args: Prisma.ProyectoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProyecto>
          }
          groupBy: {
            args: Prisma.ProyectoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProyectoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProyectoCountArgs<ExtArgs>
            result: $Utils.Optional<ProyectoCountAggregateOutputType> | number
          }
        }
      }
      Estado_documento: {
        payload: Prisma.$Estado_documentoPayload<ExtArgs>
        fields: Prisma.Estado_documentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Estado_documentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_documentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Estado_documentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_documentoPayload>
          }
          findFirst: {
            args: Prisma.Estado_documentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_documentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Estado_documentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_documentoPayload>
          }
          findMany: {
            args: Prisma.Estado_documentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_documentoPayload>[]
          }
          create: {
            args: Prisma.Estado_documentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_documentoPayload>
          }
          createMany: {
            args: Prisma.Estado_documentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Estado_documentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_documentoPayload>[]
          }
          delete: {
            args: Prisma.Estado_documentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_documentoPayload>
          }
          update: {
            args: Prisma.Estado_documentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_documentoPayload>
          }
          deleteMany: {
            args: Prisma.Estado_documentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Estado_documentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Estado_documentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_documentoPayload>[]
          }
          upsert: {
            args: Prisma.Estado_documentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_documentoPayload>
          }
          aggregate: {
            args: Prisma.Estado_documentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado_documento>
          }
          groupBy: {
            args: Prisma.Estado_documentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Estado_documentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Estado_documentoCountArgs<ExtArgs>
            result: $Utils.Optional<Estado_documentoCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Documento: {
        payload: Prisma.$DocumentoPayload<ExtArgs>
        fields: Prisma.DocumentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          findFirst: {
            args: Prisma.DocumentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          findMany: {
            args: Prisma.DocumentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          create: {
            args: Prisma.DocumentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          createMany: {
            args: Prisma.DocumentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          delete: {
            args: Prisma.DocumentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          update: {
            args: Prisma.DocumentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          deleteMany: {
            args: Prisma.DocumentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          upsert: {
            args: Prisma.DocumentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          aggregate: {
            args: Prisma.DocumentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumento>
          }
          groupBy: {
            args: Prisma.DocumentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentoCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentoCountAggregateOutputType> | number
          }
        }
      }
      Historial_documentos: {
        payload: Prisma.$Historial_documentosPayload<ExtArgs>
        fields: Prisma.Historial_documentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Historial_documentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historial_documentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Historial_documentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historial_documentosPayload>
          }
          findFirst: {
            args: Prisma.Historial_documentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historial_documentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Historial_documentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historial_documentosPayload>
          }
          findMany: {
            args: Prisma.Historial_documentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historial_documentosPayload>[]
          }
          create: {
            args: Prisma.Historial_documentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historial_documentosPayload>
          }
          createMany: {
            args: Prisma.Historial_documentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Historial_documentosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historial_documentosPayload>[]
          }
          delete: {
            args: Prisma.Historial_documentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historial_documentosPayload>
          }
          update: {
            args: Prisma.Historial_documentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historial_documentosPayload>
          }
          deleteMany: {
            args: Prisma.Historial_documentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Historial_documentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Historial_documentosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historial_documentosPayload>[]
          }
          upsert: {
            args: Prisma.Historial_documentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historial_documentosPayload>
          }
          aggregate: {
            args: Prisma.Historial_documentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorial_documentos>
          }
          groupBy: {
            args: Prisma.Historial_documentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historial_documentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.Historial_documentosCountArgs<ExtArgs>
            result: $Utils.Optional<Historial_documentosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    proyecto?: ProyectoOmit
    estado_documento?: Estado_documentoOmit
    area?: AreaOmit
    usuario?: UsuarioOmit
    documento?: DocumentoOmit
    historial_documentos?: Historial_documentosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    documentos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | ClienteCountOutputTypeCountDocumentosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
  }


  /**
   * Count Type ProyectoCountOutputType
   */

  export type ProyectoCountOutputType = {
    documentos: number
  }

  export type ProyectoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | ProyectoCountOutputTypeCountDocumentosArgs
  }

  // Custom InputTypes
  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProyectoCountOutputType
     */
    select?: ProyectoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
  }


  /**
   * Count Type Estado_documentoCountOutputType
   */

  export type Estado_documentoCountOutputType = {
    documentos: number
    historiales: number
  }

  export type Estado_documentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | Estado_documentoCountOutputTypeCountDocumentosArgs
    historiales?: boolean | Estado_documentoCountOutputTypeCountHistorialesArgs
  }

  // Custom InputTypes
  /**
   * Estado_documentoCountOutputType without action
   */
  export type Estado_documentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documentoCountOutputType
     */
    select?: Estado_documentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Estado_documentoCountOutputType without action
   */
  export type Estado_documentoCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
  }

  /**
   * Estado_documentoCountOutputType without action
   */
  export type Estado_documentoCountOutputTypeCountHistorialesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historial_documentosWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    documentos: number
    usuarios: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | AreaCountOutputTypeCountDocumentosArgs
    usuarios?: boolean | AreaCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    documentos: number
    historiales: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | UsuarioCountOutputTypeCountDocumentosArgs
    historiales?: boolean | UsuarioCountOutputTypeCountHistorialesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountHistorialesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historial_documentosWhereInput
  }


  /**
   * Count Type DocumentoCountOutputType
   */

  export type DocumentoCountOutputType = {
    historiales: number
  }

  export type DocumentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historiales?: boolean | DocumentoCountOutputTypeCountHistorialesArgs
  }

  // Custom InputTypes
  /**
   * DocumentoCountOutputType without action
   */
  export type DocumentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoCountOutputType
     */
    select?: DocumentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentoCountOutputType without action
   */
  export type DocumentoCountOutputTypeCountHistorialesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historial_documentosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    ID_cliente: number | null
  }

  export type ClienteSumAggregateOutputType = {
    ID_cliente: number | null
  }

  export type ClienteMinAggregateOutputType = {
    ID_cliente: number | null
    nombre: string | null
    apellido: string | null
    nombre_departamento: string | null
    nombre_provincia: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    ID_cliente: number | null
    nombre: string | null
    apellido: string | null
    nombre_departamento: string | null
    nombre_provincia: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    ID_cliente: number
    nombre: number
    apellido: number
    nombre_departamento: number
    nombre_provincia: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    ID_cliente?: true
  }

  export type ClienteSumAggregateInputType = {
    ID_cliente?: true
  }

  export type ClienteMinAggregateInputType = {
    ID_cliente?: true
    nombre?: true
    apellido?: true
    nombre_departamento?: true
    nombre_provincia?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ClienteMaxAggregateInputType = {
    ID_cliente?: true
    nombre?: true
    apellido?: true
    nombre_departamento?: true
    nombre_provincia?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ClienteCountAggregateInputType = {
    ID_cliente?: true
    nombre?: true
    apellido?: true
    nombre_departamento?: true
    nombre_provincia?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    ID_cliente: number
    nombre: string
    apellido: string
    nombre_departamento: string
    nombre_provincia: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    nombre_departamento?: boolean
    nombre_provincia?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    documentos?: boolean | Cliente$documentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    nombre_departamento?: boolean
    nombre_provincia?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    nombre_departamento?: boolean
    nombre_provincia?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    ID_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    nombre_departamento?: boolean
    nombre_provincia?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_cliente" | "nombre" | "apellido" | "nombre_departamento" | "nombre_provincia" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | Cliente$documentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      documentos: Prisma.$DocumentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_cliente: number
      nombre: string
      apellido: string
      nombre_departamento: string
      nombre_provincia: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `ID_cliente`
     * const clienteWithID_clienteOnly = await prisma.cliente.findMany({ select: { ID_cliente: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `ID_cliente`
     * const clienteWithID_clienteOnly = await prisma.cliente.createManyAndReturn({
     *   select: { ID_cliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `ID_cliente`
     * const clienteWithID_clienteOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { ID_cliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentos<T extends Cliente$documentosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly ID_cliente: FieldRef<"Cliente", 'Int'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly apellido: FieldRef<"Cliente", 'String'>
    readonly nombre_departamento: FieldRef<"Cliente", 'String'>
    readonly nombre_provincia: FieldRef<"Cliente", 'String'>
    readonly created_at: FieldRef<"Cliente", 'DateTime'>
    readonly updated_at: FieldRef<"Cliente", 'DateTime'>
    readonly deleted_at: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.documentos
   */
  export type Cliente$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    cursor?: DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Proyecto
   */

  export type AggregateProyecto = {
    _count: ProyectoCountAggregateOutputType | null
    _avg: ProyectoAvgAggregateOutputType | null
    _sum: ProyectoSumAggregateOutputType | null
    _min: ProyectoMinAggregateOutputType | null
    _max: ProyectoMaxAggregateOutputType | null
  }

  export type ProyectoAvgAggregateOutputType = {
    ID_proyecto: number | null
  }

  export type ProyectoSumAggregateOutputType = {
    ID_proyecto: number | null
  }

  export type ProyectoMinAggregateOutputType = {
    ID_proyecto: number | null
    nombre: string | null
    descripcion: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ProyectoMaxAggregateOutputType = {
    ID_proyecto: number | null
    nombre: string | null
    descripcion: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ProyectoCountAggregateOutputType = {
    ID_proyecto: number
    nombre: number
    descripcion: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ProyectoAvgAggregateInputType = {
    ID_proyecto?: true
  }

  export type ProyectoSumAggregateInputType = {
    ID_proyecto?: true
  }

  export type ProyectoMinAggregateInputType = {
    ID_proyecto?: true
    nombre?: true
    descripcion?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ProyectoMaxAggregateInputType = {
    ID_proyecto?: true
    nombre?: true
    descripcion?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ProyectoCountAggregateInputType = {
    ID_proyecto?: true
    nombre?: true
    descripcion?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ProyectoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proyecto to aggregate.
     */
    where?: ProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proyectos to fetch.
     */
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proyectos
    **/
    _count?: true | ProyectoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProyectoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProyectoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProyectoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProyectoMaxAggregateInputType
  }

  export type GetProyectoAggregateType<T extends ProyectoAggregateArgs> = {
        [P in keyof T & keyof AggregateProyecto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProyecto[P]>
      : GetScalarType<T[P], AggregateProyecto[P]>
  }




  export type ProyectoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProyectoWhereInput
    orderBy?: ProyectoOrderByWithAggregationInput | ProyectoOrderByWithAggregationInput[]
    by: ProyectoScalarFieldEnum[] | ProyectoScalarFieldEnum
    having?: ProyectoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProyectoCountAggregateInputType | true
    _avg?: ProyectoAvgAggregateInputType
    _sum?: ProyectoSumAggregateInputType
    _min?: ProyectoMinAggregateInputType
    _max?: ProyectoMaxAggregateInputType
  }

  export type ProyectoGroupByOutputType = {
    ID_proyecto: number
    nombre: string
    descripcion: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: ProyectoCountAggregateOutputType | null
    _avg: ProyectoAvgAggregateOutputType | null
    _sum: ProyectoSumAggregateOutputType | null
    _min: ProyectoMinAggregateOutputType | null
    _max: ProyectoMaxAggregateOutputType | null
  }

  type GetProyectoGroupByPayload<T extends ProyectoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProyectoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProyectoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProyectoGroupByOutputType[P]>
            : GetScalarType<T[P], ProyectoGroupByOutputType[P]>
        }
      >
    >


  export type ProyectoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_proyecto?: boolean
    nombre?: boolean
    descripcion?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    documentos?: boolean | Proyecto$documentosArgs<ExtArgs>
    _count?: boolean | ProyectoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proyecto"]>

  export type ProyectoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_proyecto?: boolean
    nombre?: boolean
    descripcion?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["proyecto"]>

  export type ProyectoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_proyecto?: boolean
    nombre?: boolean
    descripcion?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["proyecto"]>

  export type ProyectoSelectScalar = {
    ID_proyecto?: boolean
    nombre?: boolean
    descripcion?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ProyectoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_proyecto" | "nombre" | "descripcion" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["proyecto"]>
  export type ProyectoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | Proyecto$documentosArgs<ExtArgs>
    _count?: boolean | ProyectoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProyectoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProyectoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProyectoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proyecto"
    objects: {
      documentos: Prisma.$DocumentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_proyecto: number
      nombre: string
      descripcion: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["proyecto"]>
    composites: {}
  }

  type ProyectoGetPayload<S extends boolean | null | undefined | ProyectoDefaultArgs> = $Result.GetResult<Prisma.$ProyectoPayload, S>

  type ProyectoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProyectoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProyectoCountAggregateInputType | true
    }

  export interface ProyectoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proyecto'], meta: { name: 'Proyecto' } }
    /**
     * Find zero or one Proyecto that matches the filter.
     * @param {ProyectoFindUniqueArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProyectoFindUniqueArgs>(args: SelectSubset<T, ProyectoFindUniqueArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proyecto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProyectoFindUniqueOrThrowArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProyectoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProyectoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyecto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoFindFirstArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProyectoFindFirstArgs>(args?: SelectSubset<T, ProyectoFindFirstArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyecto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoFindFirstOrThrowArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProyectoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProyectoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proyectos
     * const proyectos = await prisma.proyecto.findMany()
     * 
     * // Get first 10 Proyectos
     * const proyectos = await prisma.proyecto.findMany({ take: 10 })
     * 
     * // Only select the `ID_proyecto`
     * const proyectoWithID_proyectoOnly = await prisma.proyecto.findMany({ select: { ID_proyecto: true } })
     * 
     */
    findMany<T extends ProyectoFindManyArgs>(args?: SelectSubset<T, ProyectoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proyecto.
     * @param {ProyectoCreateArgs} args - Arguments to create a Proyecto.
     * @example
     * // Create one Proyecto
     * const Proyecto = await prisma.proyecto.create({
     *   data: {
     *     // ... data to create a Proyecto
     *   }
     * })
     * 
     */
    create<T extends ProyectoCreateArgs>(args: SelectSubset<T, ProyectoCreateArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proyectos.
     * @param {ProyectoCreateManyArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyecto = await prisma.proyecto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProyectoCreateManyArgs>(args?: SelectSubset<T, ProyectoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proyectos and returns the data saved in the database.
     * @param {ProyectoCreateManyAndReturnArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyecto = await prisma.proyecto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proyectos and only return the `ID_proyecto`
     * const proyectoWithID_proyectoOnly = await prisma.proyecto.createManyAndReturn({
     *   select: { ID_proyecto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProyectoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProyectoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proyecto.
     * @param {ProyectoDeleteArgs} args - Arguments to delete one Proyecto.
     * @example
     * // Delete one Proyecto
     * const Proyecto = await prisma.proyecto.delete({
     *   where: {
     *     // ... filter to delete one Proyecto
     *   }
     * })
     * 
     */
    delete<T extends ProyectoDeleteArgs>(args: SelectSubset<T, ProyectoDeleteArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proyecto.
     * @param {ProyectoUpdateArgs} args - Arguments to update one Proyecto.
     * @example
     * // Update one Proyecto
     * const proyecto = await prisma.proyecto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProyectoUpdateArgs>(args: SelectSubset<T, ProyectoUpdateArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proyectos.
     * @param {ProyectoDeleteManyArgs} args - Arguments to filter Proyectos to delete.
     * @example
     * // Delete a few Proyectos
     * const { count } = await prisma.proyecto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProyectoDeleteManyArgs>(args?: SelectSubset<T, ProyectoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proyectos
     * const proyecto = await prisma.proyecto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProyectoUpdateManyArgs>(args: SelectSubset<T, ProyectoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyectos and returns the data updated in the database.
     * @param {ProyectoUpdateManyAndReturnArgs} args - Arguments to update many Proyectos.
     * @example
     * // Update many Proyectos
     * const proyecto = await prisma.proyecto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proyectos and only return the `ID_proyecto`
     * const proyectoWithID_proyectoOnly = await prisma.proyecto.updateManyAndReturn({
     *   select: { ID_proyecto: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProyectoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProyectoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proyecto.
     * @param {ProyectoUpsertArgs} args - Arguments to update or create a Proyecto.
     * @example
     * // Update or create a Proyecto
     * const proyecto = await prisma.proyecto.upsert({
     *   create: {
     *     // ... data to create a Proyecto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proyecto we want to update
     *   }
     * })
     */
    upsert<T extends ProyectoUpsertArgs>(args: SelectSubset<T, ProyectoUpsertArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoCountArgs} args - Arguments to filter Proyectos to count.
     * @example
     * // Count the number of Proyectos
     * const count = await prisma.proyecto.count({
     *   where: {
     *     // ... the filter for the Proyectos we want to count
     *   }
     * })
    **/
    count<T extends ProyectoCountArgs>(
      args?: Subset<T, ProyectoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProyectoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProyectoAggregateArgs>(args: Subset<T, ProyectoAggregateArgs>): Prisma.PrismaPromise<GetProyectoAggregateType<T>>

    /**
     * Group by Proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProyectoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProyectoGroupByArgs['orderBy'] }
        : { orderBy?: ProyectoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProyectoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProyectoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proyecto model
   */
  readonly fields: ProyectoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proyecto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProyectoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentos<T extends Proyecto$documentosArgs<ExtArgs> = {}>(args?: Subset<T, Proyecto$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proyecto model
   */
  interface ProyectoFieldRefs {
    readonly ID_proyecto: FieldRef<"Proyecto", 'Int'>
    readonly nombre: FieldRef<"Proyecto", 'String'>
    readonly descripcion: FieldRef<"Proyecto", 'String'>
    readonly created_at: FieldRef<"Proyecto", 'DateTime'>
    readonly updated_at: FieldRef<"Proyecto", 'DateTime'>
    readonly deleted_at: FieldRef<"Proyecto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proyecto findUnique
   */
  export type ProyectoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyecto to fetch.
     */
    where: ProyectoWhereUniqueInput
  }

  /**
   * Proyecto findUniqueOrThrow
   */
  export type ProyectoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyecto to fetch.
     */
    where: ProyectoWhereUniqueInput
  }

  /**
   * Proyecto findFirst
   */
  export type ProyectoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyecto to fetch.
     */
    where?: ProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proyectos to fetch.
     */
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proyectos.
     */
    cursor?: ProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proyectos.
     */
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * Proyecto findFirstOrThrow
   */
  export type ProyectoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyecto to fetch.
     */
    where?: ProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proyectos to fetch.
     */
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proyectos.
     */
    cursor?: ProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proyectos.
     */
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * Proyecto findMany
   */
  export type ProyectoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyectos to fetch.
     */
    where?: ProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proyectos to fetch.
     */
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proyectos.
     */
    cursor?: ProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proyectos.
     */
    skip?: number
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * Proyecto create
   */
  export type ProyectoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * The data needed to create a Proyecto.
     */
    data: XOR<ProyectoCreateInput, ProyectoUncheckedCreateInput>
  }

  /**
   * Proyecto createMany
   */
  export type ProyectoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proyectos.
     */
    data: ProyectoCreateManyInput | ProyectoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proyecto createManyAndReturn
   */
  export type ProyectoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * The data used to create many Proyectos.
     */
    data: ProyectoCreateManyInput | ProyectoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proyecto update
   */
  export type ProyectoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * The data needed to update a Proyecto.
     */
    data: XOR<ProyectoUpdateInput, ProyectoUncheckedUpdateInput>
    /**
     * Choose, which Proyecto to update.
     */
    where: ProyectoWhereUniqueInput
  }

  /**
   * Proyecto updateMany
   */
  export type ProyectoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proyectos.
     */
    data: XOR<ProyectoUpdateManyMutationInput, ProyectoUncheckedUpdateManyInput>
    /**
     * Filter which Proyectos to update
     */
    where?: ProyectoWhereInput
    /**
     * Limit how many Proyectos to update.
     */
    limit?: number
  }

  /**
   * Proyecto updateManyAndReturn
   */
  export type ProyectoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * The data used to update Proyectos.
     */
    data: XOR<ProyectoUpdateManyMutationInput, ProyectoUncheckedUpdateManyInput>
    /**
     * Filter which Proyectos to update
     */
    where?: ProyectoWhereInput
    /**
     * Limit how many Proyectos to update.
     */
    limit?: number
  }

  /**
   * Proyecto upsert
   */
  export type ProyectoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * The filter to search for the Proyecto to update in case it exists.
     */
    where: ProyectoWhereUniqueInput
    /**
     * In case the Proyecto found by the `where` argument doesn't exist, create a new Proyecto with this data.
     */
    create: XOR<ProyectoCreateInput, ProyectoUncheckedCreateInput>
    /**
     * In case the Proyecto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProyectoUpdateInput, ProyectoUncheckedUpdateInput>
  }

  /**
   * Proyecto delete
   */
  export type ProyectoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter which Proyecto to delete.
     */
    where: ProyectoWhereUniqueInput
  }

  /**
   * Proyecto deleteMany
   */
  export type ProyectoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proyectos to delete
     */
    where?: ProyectoWhereInput
    /**
     * Limit how many Proyectos to delete.
     */
    limit?: number
  }

  /**
   * Proyecto.documentos
   */
  export type Proyecto$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    cursor?: DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Proyecto without action
   */
  export type ProyectoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
  }


  /**
   * Model Estado_documento
   */

  export type AggregateEstado_documento = {
    _count: Estado_documentoCountAggregateOutputType | null
    _avg: Estado_documentoAvgAggregateOutputType | null
    _sum: Estado_documentoSumAggregateOutputType | null
    _min: Estado_documentoMinAggregateOutputType | null
    _max: Estado_documentoMaxAggregateOutputType | null
  }

  export type Estado_documentoAvgAggregateOutputType = {
    ID_estado: number | null
  }

  export type Estado_documentoSumAggregateOutputType = {
    ID_estado: number | null
  }

  export type Estado_documentoMinAggregateOutputType = {
    ID_estado: number | null
    estado: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Estado_documentoMaxAggregateOutputType = {
    ID_estado: number | null
    estado: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Estado_documentoCountAggregateOutputType = {
    ID_estado: number
    estado: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Estado_documentoAvgAggregateInputType = {
    ID_estado?: true
  }

  export type Estado_documentoSumAggregateInputType = {
    ID_estado?: true
  }

  export type Estado_documentoMinAggregateInputType = {
    ID_estado?: true
    estado?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Estado_documentoMaxAggregateInputType = {
    ID_estado?: true
    estado?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Estado_documentoCountAggregateInputType = {
    ID_estado?: true
    estado?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Estado_documentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estado_documento to aggregate.
     */
    where?: Estado_documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estado_documentos to fetch.
     */
    orderBy?: Estado_documentoOrderByWithRelationInput | Estado_documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Estado_documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estado_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estado_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estado_documentos
    **/
    _count?: true | Estado_documentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Estado_documentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Estado_documentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Estado_documentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Estado_documentoMaxAggregateInputType
  }

  export type GetEstado_documentoAggregateType<T extends Estado_documentoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado_documento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado_documento[P]>
      : GetScalarType<T[P], AggregateEstado_documento[P]>
  }




  export type Estado_documentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Estado_documentoWhereInput
    orderBy?: Estado_documentoOrderByWithAggregationInput | Estado_documentoOrderByWithAggregationInput[]
    by: Estado_documentoScalarFieldEnum[] | Estado_documentoScalarFieldEnum
    having?: Estado_documentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Estado_documentoCountAggregateInputType | true
    _avg?: Estado_documentoAvgAggregateInputType
    _sum?: Estado_documentoSumAggregateInputType
    _min?: Estado_documentoMinAggregateInputType
    _max?: Estado_documentoMaxAggregateInputType
  }

  export type Estado_documentoGroupByOutputType = {
    ID_estado: number
    estado: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: Estado_documentoCountAggregateOutputType | null
    _avg: Estado_documentoAvgAggregateOutputType | null
    _sum: Estado_documentoSumAggregateOutputType | null
    _min: Estado_documentoMinAggregateOutputType | null
    _max: Estado_documentoMaxAggregateOutputType | null
  }

  type GetEstado_documentoGroupByPayload<T extends Estado_documentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Estado_documentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Estado_documentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Estado_documentoGroupByOutputType[P]>
            : GetScalarType<T[P], Estado_documentoGroupByOutputType[P]>
        }
      >
    >


  export type Estado_documentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_estado?: boolean
    estado?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    documentos?: boolean | Estado_documento$documentosArgs<ExtArgs>
    historiales?: boolean | Estado_documento$historialesArgs<ExtArgs>
    _count?: boolean | Estado_documentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado_documento"]>

  export type Estado_documentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_estado?: boolean
    estado?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["estado_documento"]>

  export type Estado_documentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_estado?: boolean
    estado?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["estado_documento"]>

  export type Estado_documentoSelectScalar = {
    ID_estado?: boolean
    estado?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type Estado_documentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_estado" | "estado" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["estado_documento"]>
  export type Estado_documentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | Estado_documento$documentosArgs<ExtArgs>
    historiales?: boolean | Estado_documento$historialesArgs<ExtArgs>
    _count?: boolean | Estado_documentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Estado_documentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Estado_documentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Estado_documentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estado_documento"
    objects: {
      documentos: Prisma.$DocumentoPayload<ExtArgs>[]
      historiales: Prisma.$Historial_documentosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_estado: number
      estado: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["estado_documento"]>
    composites: {}
  }

  type Estado_documentoGetPayload<S extends boolean | null | undefined | Estado_documentoDefaultArgs> = $Result.GetResult<Prisma.$Estado_documentoPayload, S>

  type Estado_documentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Estado_documentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Estado_documentoCountAggregateInputType | true
    }

  export interface Estado_documentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estado_documento'], meta: { name: 'Estado_documento' } }
    /**
     * Find zero or one Estado_documento that matches the filter.
     * @param {Estado_documentoFindUniqueArgs} args - Arguments to find a Estado_documento
     * @example
     * // Get one Estado_documento
     * const estado_documento = await prisma.estado_documento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Estado_documentoFindUniqueArgs>(args: SelectSubset<T, Estado_documentoFindUniqueArgs<ExtArgs>>): Prisma__Estado_documentoClient<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estado_documento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Estado_documentoFindUniqueOrThrowArgs} args - Arguments to find a Estado_documento
     * @example
     * // Get one Estado_documento
     * const estado_documento = await prisma.estado_documento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Estado_documentoFindUniqueOrThrowArgs>(args: SelectSubset<T, Estado_documentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Estado_documentoClient<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado_documento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_documentoFindFirstArgs} args - Arguments to find a Estado_documento
     * @example
     * // Get one Estado_documento
     * const estado_documento = await prisma.estado_documento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Estado_documentoFindFirstArgs>(args?: SelectSubset<T, Estado_documentoFindFirstArgs<ExtArgs>>): Prisma__Estado_documentoClient<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado_documento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_documentoFindFirstOrThrowArgs} args - Arguments to find a Estado_documento
     * @example
     * // Get one Estado_documento
     * const estado_documento = await prisma.estado_documento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Estado_documentoFindFirstOrThrowArgs>(args?: SelectSubset<T, Estado_documentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Estado_documentoClient<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estado_documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_documentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estado_documentos
     * const estado_documentos = await prisma.estado_documento.findMany()
     * 
     * // Get first 10 Estado_documentos
     * const estado_documentos = await prisma.estado_documento.findMany({ take: 10 })
     * 
     * // Only select the `ID_estado`
     * const estado_documentoWithID_estadoOnly = await prisma.estado_documento.findMany({ select: { ID_estado: true } })
     * 
     */
    findMany<T extends Estado_documentoFindManyArgs>(args?: SelectSubset<T, Estado_documentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estado_documento.
     * @param {Estado_documentoCreateArgs} args - Arguments to create a Estado_documento.
     * @example
     * // Create one Estado_documento
     * const Estado_documento = await prisma.estado_documento.create({
     *   data: {
     *     // ... data to create a Estado_documento
     *   }
     * })
     * 
     */
    create<T extends Estado_documentoCreateArgs>(args: SelectSubset<T, Estado_documentoCreateArgs<ExtArgs>>): Prisma__Estado_documentoClient<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estado_documentos.
     * @param {Estado_documentoCreateManyArgs} args - Arguments to create many Estado_documentos.
     * @example
     * // Create many Estado_documentos
     * const estado_documento = await prisma.estado_documento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Estado_documentoCreateManyArgs>(args?: SelectSubset<T, Estado_documentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estado_documentos and returns the data saved in the database.
     * @param {Estado_documentoCreateManyAndReturnArgs} args - Arguments to create many Estado_documentos.
     * @example
     * // Create many Estado_documentos
     * const estado_documento = await prisma.estado_documento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estado_documentos and only return the `ID_estado`
     * const estado_documentoWithID_estadoOnly = await prisma.estado_documento.createManyAndReturn({
     *   select: { ID_estado: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Estado_documentoCreateManyAndReturnArgs>(args?: SelectSubset<T, Estado_documentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estado_documento.
     * @param {Estado_documentoDeleteArgs} args - Arguments to delete one Estado_documento.
     * @example
     * // Delete one Estado_documento
     * const Estado_documento = await prisma.estado_documento.delete({
     *   where: {
     *     // ... filter to delete one Estado_documento
     *   }
     * })
     * 
     */
    delete<T extends Estado_documentoDeleteArgs>(args: SelectSubset<T, Estado_documentoDeleteArgs<ExtArgs>>): Prisma__Estado_documentoClient<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estado_documento.
     * @param {Estado_documentoUpdateArgs} args - Arguments to update one Estado_documento.
     * @example
     * // Update one Estado_documento
     * const estado_documento = await prisma.estado_documento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Estado_documentoUpdateArgs>(args: SelectSubset<T, Estado_documentoUpdateArgs<ExtArgs>>): Prisma__Estado_documentoClient<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estado_documentos.
     * @param {Estado_documentoDeleteManyArgs} args - Arguments to filter Estado_documentos to delete.
     * @example
     * // Delete a few Estado_documentos
     * const { count } = await prisma.estado_documento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Estado_documentoDeleteManyArgs>(args?: SelectSubset<T, Estado_documentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estado_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_documentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estado_documentos
     * const estado_documento = await prisma.estado_documento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Estado_documentoUpdateManyArgs>(args: SelectSubset<T, Estado_documentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estado_documentos and returns the data updated in the database.
     * @param {Estado_documentoUpdateManyAndReturnArgs} args - Arguments to update many Estado_documentos.
     * @example
     * // Update many Estado_documentos
     * const estado_documento = await prisma.estado_documento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estado_documentos and only return the `ID_estado`
     * const estado_documentoWithID_estadoOnly = await prisma.estado_documento.updateManyAndReturn({
     *   select: { ID_estado: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Estado_documentoUpdateManyAndReturnArgs>(args: SelectSubset<T, Estado_documentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estado_documento.
     * @param {Estado_documentoUpsertArgs} args - Arguments to update or create a Estado_documento.
     * @example
     * // Update or create a Estado_documento
     * const estado_documento = await prisma.estado_documento.upsert({
     *   create: {
     *     // ... data to create a Estado_documento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado_documento we want to update
     *   }
     * })
     */
    upsert<T extends Estado_documentoUpsertArgs>(args: SelectSubset<T, Estado_documentoUpsertArgs<ExtArgs>>): Prisma__Estado_documentoClient<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estado_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_documentoCountArgs} args - Arguments to filter Estado_documentos to count.
     * @example
     * // Count the number of Estado_documentos
     * const count = await prisma.estado_documento.count({
     *   where: {
     *     // ... the filter for the Estado_documentos we want to count
     *   }
     * })
    **/
    count<T extends Estado_documentoCountArgs>(
      args?: Subset<T, Estado_documentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Estado_documentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado_documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_documentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Estado_documentoAggregateArgs>(args: Subset<T, Estado_documentoAggregateArgs>): Prisma.PrismaPromise<GetEstado_documentoAggregateType<T>>

    /**
     * Group by Estado_documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_documentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Estado_documentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Estado_documentoGroupByArgs['orderBy'] }
        : { orderBy?: Estado_documentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Estado_documentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstado_documentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estado_documento model
   */
  readonly fields: Estado_documentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estado_documento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Estado_documentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentos<T extends Estado_documento$documentosArgs<ExtArgs> = {}>(args?: Subset<T, Estado_documento$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historiales<T extends Estado_documento$historialesArgs<ExtArgs> = {}>(args?: Subset<T, Estado_documento$historialesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estado_documento model
   */
  interface Estado_documentoFieldRefs {
    readonly ID_estado: FieldRef<"Estado_documento", 'Int'>
    readonly estado: FieldRef<"Estado_documento", 'String'>
    readonly created_at: FieldRef<"Estado_documento", 'DateTime'>
    readonly updated_at: FieldRef<"Estado_documento", 'DateTime'>
    readonly deleted_at: FieldRef<"Estado_documento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Estado_documento findUnique
   */
  export type Estado_documentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documento
     */
    select?: Estado_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_documento
     */
    omit?: Estado_documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_documentoInclude<ExtArgs> | null
    /**
     * Filter, which Estado_documento to fetch.
     */
    where: Estado_documentoWhereUniqueInput
  }

  /**
   * Estado_documento findUniqueOrThrow
   */
  export type Estado_documentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documento
     */
    select?: Estado_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_documento
     */
    omit?: Estado_documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_documentoInclude<ExtArgs> | null
    /**
     * Filter, which Estado_documento to fetch.
     */
    where: Estado_documentoWhereUniqueInput
  }

  /**
   * Estado_documento findFirst
   */
  export type Estado_documentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documento
     */
    select?: Estado_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_documento
     */
    omit?: Estado_documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_documentoInclude<ExtArgs> | null
    /**
     * Filter, which Estado_documento to fetch.
     */
    where?: Estado_documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estado_documentos to fetch.
     */
    orderBy?: Estado_documentoOrderByWithRelationInput | Estado_documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estado_documentos.
     */
    cursor?: Estado_documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estado_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estado_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estado_documentos.
     */
    distinct?: Estado_documentoScalarFieldEnum | Estado_documentoScalarFieldEnum[]
  }

  /**
   * Estado_documento findFirstOrThrow
   */
  export type Estado_documentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documento
     */
    select?: Estado_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_documento
     */
    omit?: Estado_documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_documentoInclude<ExtArgs> | null
    /**
     * Filter, which Estado_documento to fetch.
     */
    where?: Estado_documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estado_documentos to fetch.
     */
    orderBy?: Estado_documentoOrderByWithRelationInput | Estado_documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estado_documentos.
     */
    cursor?: Estado_documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estado_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estado_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estado_documentos.
     */
    distinct?: Estado_documentoScalarFieldEnum | Estado_documentoScalarFieldEnum[]
  }

  /**
   * Estado_documento findMany
   */
  export type Estado_documentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documento
     */
    select?: Estado_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_documento
     */
    omit?: Estado_documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_documentoInclude<ExtArgs> | null
    /**
     * Filter, which Estado_documentos to fetch.
     */
    where?: Estado_documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estado_documentos to fetch.
     */
    orderBy?: Estado_documentoOrderByWithRelationInput | Estado_documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estado_documentos.
     */
    cursor?: Estado_documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estado_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estado_documentos.
     */
    skip?: number
    distinct?: Estado_documentoScalarFieldEnum | Estado_documentoScalarFieldEnum[]
  }

  /**
   * Estado_documento create
   */
  export type Estado_documentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documento
     */
    select?: Estado_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_documento
     */
    omit?: Estado_documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_documentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Estado_documento.
     */
    data: XOR<Estado_documentoCreateInput, Estado_documentoUncheckedCreateInput>
  }

  /**
   * Estado_documento createMany
   */
  export type Estado_documentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estado_documentos.
     */
    data: Estado_documentoCreateManyInput | Estado_documentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estado_documento createManyAndReturn
   */
  export type Estado_documentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documento
     */
    select?: Estado_documentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_documento
     */
    omit?: Estado_documentoOmit<ExtArgs> | null
    /**
     * The data used to create many Estado_documentos.
     */
    data: Estado_documentoCreateManyInput | Estado_documentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estado_documento update
   */
  export type Estado_documentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documento
     */
    select?: Estado_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_documento
     */
    omit?: Estado_documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_documentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Estado_documento.
     */
    data: XOR<Estado_documentoUpdateInput, Estado_documentoUncheckedUpdateInput>
    /**
     * Choose, which Estado_documento to update.
     */
    where: Estado_documentoWhereUniqueInput
  }

  /**
   * Estado_documento updateMany
   */
  export type Estado_documentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estado_documentos.
     */
    data: XOR<Estado_documentoUpdateManyMutationInput, Estado_documentoUncheckedUpdateManyInput>
    /**
     * Filter which Estado_documentos to update
     */
    where?: Estado_documentoWhereInput
    /**
     * Limit how many Estado_documentos to update.
     */
    limit?: number
  }

  /**
   * Estado_documento updateManyAndReturn
   */
  export type Estado_documentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documento
     */
    select?: Estado_documentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_documento
     */
    omit?: Estado_documentoOmit<ExtArgs> | null
    /**
     * The data used to update Estado_documentos.
     */
    data: XOR<Estado_documentoUpdateManyMutationInput, Estado_documentoUncheckedUpdateManyInput>
    /**
     * Filter which Estado_documentos to update
     */
    where?: Estado_documentoWhereInput
    /**
     * Limit how many Estado_documentos to update.
     */
    limit?: number
  }

  /**
   * Estado_documento upsert
   */
  export type Estado_documentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documento
     */
    select?: Estado_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_documento
     */
    omit?: Estado_documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_documentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Estado_documento to update in case it exists.
     */
    where: Estado_documentoWhereUniqueInput
    /**
     * In case the Estado_documento found by the `where` argument doesn't exist, create a new Estado_documento with this data.
     */
    create: XOR<Estado_documentoCreateInput, Estado_documentoUncheckedCreateInput>
    /**
     * In case the Estado_documento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Estado_documentoUpdateInput, Estado_documentoUncheckedUpdateInput>
  }

  /**
   * Estado_documento delete
   */
  export type Estado_documentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documento
     */
    select?: Estado_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_documento
     */
    omit?: Estado_documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_documentoInclude<ExtArgs> | null
    /**
     * Filter which Estado_documento to delete.
     */
    where: Estado_documentoWhereUniqueInput
  }

  /**
   * Estado_documento deleteMany
   */
  export type Estado_documentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estado_documentos to delete
     */
    where?: Estado_documentoWhereInput
    /**
     * Limit how many Estado_documentos to delete.
     */
    limit?: number
  }

  /**
   * Estado_documento.documentos
   */
  export type Estado_documento$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    cursor?: DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Estado_documento.historiales
   */
  export type Estado_documento$historialesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
    where?: Historial_documentosWhereInput
    orderBy?: Historial_documentosOrderByWithRelationInput | Historial_documentosOrderByWithRelationInput[]
    cursor?: Historial_documentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historial_documentosScalarFieldEnum | Historial_documentosScalarFieldEnum[]
  }

  /**
   * Estado_documento without action
   */
  export type Estado_documentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_documento
     */
    select?: Estado_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_documento
     */
    omit?: Estado_documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_documentoInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    ID_area: number | null
  }

  export type AreaSumAggregateOutputType = {
    ID_area: number | null
  }

  export type AreaMinAggregateOutputType = {
    ID_area: number | null
    nombre: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AreaMaxAggregateOutputType = {
    ID_area: number | null
    nombre: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AreaCountAggregateOutputType = {
    ID_area: number
    nombre: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    ID_area?: true
  }

  export type AreaSumAggregateInputType = {
    ID_area?: true
  }

  export type AreaMinAggregateInputType = {
    ID_area?: true
    nombre?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AreaMaxAggregateInputType = {
    ID_area?: true
    nombre?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AreaCountAggregateInputType = {
    ID_area?: true
    nombre?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    ID_area: number
    nombre: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_area?: boolean
    nombre?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    documentos?: boolean | Area$documentosArgs<ExtArgs>
    usuarios?: boolean | Area$usuariosArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_area?: boolean
    nombre?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["area"]>

  export type AreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_area?: boolean
    nombre?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["area"]>

  export type AreaSelectScalar = {
    ID_area?: boolean
    nombre?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type AreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_area" | "nombre" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["area"]>
  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | Area$documentosArgs<ExtArgs>
    usuarios?: boolean | Area$usuariosArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      documentos: Prisma.$DocumentoPayload<ExtArgs>[]
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_area: number
      nombre: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `ID_area`
     * const areaWithID_areaOnly = await prisma.area.findMany({ select: { ID_area: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {AreaCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `ID_area`
     * const areaWithID_areaOnly = await prisma.area.createManyAndReturn({
     *   select: { ID_area: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas and returns the data updated in the database.
     * @param {AreaUpdateManyAndReturnArgs} args - Arguments to update many Areas.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Areas and only return the `ID_area`
     * const areaWithID_areaOnly = await prisma.area.updateManyAndReturn({
     *   select: { ID_area: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AreaUpdateManyAndReturnArgs>(args: SelectSubset<T, AreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentos<T extends Area$documentosArgs<ExtArgs> = {}>(args?: Subset<T, Area$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends Area$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Area$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */
  interface AreaFieldRefs {
    readonly ID_area: FieldRef<"Area", 'Int'>
    readonly nombre: FieldRef<"Area", 'String'>
    readonly created_at: FieldRef<"Area", 'DateTime'>
    readonly updated_at: FieldRef<"Area", 'DateTime'>
    readonly deleted_at: FieldRef<"Area", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area createManyAndReturn
   */
  export type AreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area updateManyAndReturn
   */
  export type AreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to delete.
     */
    limit?: number
  }

  /**
   * Area.documentos
   */
  export type Area$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    cursor?: DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Area.usuarios
   */
  export type Area$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    ID_usuario: number | null
    ID_area: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    ID_usuario: number | null
    ID_area: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    ID_usuario: number | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    contrasena: string | null
    rol: string | null
    estado: string | null
    fecha_ingreso: Date | null
    ID_area: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    ID_usuario: number | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    contrasena: string | null
    rol: string | null
    estado: string | null
    fecha_ingreso: Date | null
    ID_area: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    ID_usuario: number
    nombre: number
    apellido: number
    correo: number
    contrasena: number
    rol: number
    permisos: number
    estado: number
    fecha_ingreso: number
    ID_area: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    ID_usuario?: true
    ID_area?: true
  }

  export type UsuarioSumAggregateInputType = {
    ID_usuario?: true
    ID_area?: true
  }

  export type UsuarioMinAggregateInputType = {
    ID_usuario?: true
    nombre?: true
    apellido?: true
    correo?: true
    contrasena?: true
    rol?: true
    estado?: true
    fecha_ingreso?: true
    ID_area?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsuarioMaxAggregateInputType = {
    ID_usuario?: true
    nombre?: true
    apellido?: true
    correo?: true
    contrasena?: true
    rol?: true
    estado?: true
    fecha_ingreso?: true
    ID_area?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsuarioCountAggregateInputType = {
    ID_usuario?: true
    nombre?: true
    apellido?: true
    correo?: true
    contrasena?: true
    rol?: true
    permisos?: true
    estado?: true
    fecha_ingreso?: true
    ID_area?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    ID_usuario: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    rol: string
    permisos: string[]
    estado: string
    fecha_ingreso: Date
    ID_area: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    contrasena?: boolean
    rol?: boolean
    permisos?: boolean
    estado?: boolean
    fecha_ingreso?: boolean
    ID_area?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    documentos?: boolean | Usuario$documentosArgs<ExtArgs>
    historiales?: boolean | Usuario$historialesArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    contrasena?: boolean
    rol?: boolean
    permisos?: boolean
    estado?: boolean
    fecha_ingreso?: boolean
    ID_area?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    contrasena?: boolean
    rol?: boolean
    permisos?: boolean
    estado?: boolean
    fecha_ingreso?: boolean
    ID_area?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    ID_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    contrasena?: boolean
    rol?: boolean
    permisos?: boolean
    estado?: boolean
    fecha_ingreso?: boolean
    ID_area?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_usuario" | "nombre" | "apellido" | "correo" | "contrasena" | "rol" | "permisos" | "estado" | "fecha_ingreso" | "ID_area" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | Usuario$documentosArgs<ExtArgs>
    historiales?: boolean | Usuario$historialesArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      documentos: Prisma.$DocumentoPayload<ExtArgs>[]
      historiales: Prisma.$Historial_documentosPayload<ExtArgs>[]
      area: Prisma.$AreaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_usuario: number
      nombre: string
      apellido: string
      correo: string
      contrasena: string
      rol: string
      permisos: string[]
      estado: string
      fecha_ingreso: Date
      ID_area: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `ID_usuario`
     * const usuarioWithID_usuarioOnly = await prisma.usuario.findMany({ select: { ID_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `ID_usuario`
     * const usuarioWithID_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { ID_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `ID_usuario`
     * const usuarioWithID_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { ID_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentos<T extends Usuario$documentosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historiales<T extends Usuario$historialesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$historialesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly ID_usuario: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'String'>
    readonly permisos: FieldRef<"Usuario", 'String[]'>
    readonly estado: FieldRef<"Usuario", 'String'>
    readonly fecha_ingreso: FieldRef<"Usuario", 'DateTime'>
    readonly ID_area: FieldRef<"Usuario", 'Int'>
    readonly created_at: FieldRef<"Usuario", 'DateTime'>
    readonly updated_at: FieldRef<"Usuario", 'DateTime'>
    readonly deleted_at: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.documentos
   */
  export type Usuario$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    cursor?: DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Usuario.historiales
   */
  export type Usuario$historialesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
    where?: Historial_documentosWhereInput
    orderBy?: Historial_documentosOrderByWithRelationInput | Historial_documentosOrderByWithRelationInput[]
    cursor?: Historial_documentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historial_documentosScalarFieldEnum | Historial_documentosScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Documento
   */

  export type AggregateDocumento = {
    _count: DocumentoCountAggregateOutputType | null
    _avg: DocumentoAvgAggregateOutputType | null
    _sum: DocumentoSumAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  export type DocumentoAvgAggregateOutputType = {
    ID_documento: number | null
    ID_cliente: number | null
    ID_proyecto: number | null
    ID_estado_documento: number | null
    ID_area: number | null
    ID_usuario: number | null
  }

  export type DocumentoSumAggregateOutputType = {
    ID_documento: number | null
    ID_cliente: number | null
    ID_proyecto: number | null
    ID_estado_documento: number | null
    ID_area: number | null
    ID_usuario: number | null
  }

  export type DocumentoMinAggregateOutputType = {
    ID_documento: number | null
    nombre_documento: string | null
    tipo_documento: string | null
    archivo: string | null
    descripcion: string | null
    folio: string | null
    ID_cliente: number | null
    ID_proyecto: number | null
    ID_estado_documento: number | null
    ID_area: number | null
    ID_usuario: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type DocumentoMaxAggregateOutputType = {
    ID_documento: number | null
    nombre_documento: string | null
    tipo_documento: string | null
    archivo: string | null
    descripcion: string | null
    folio: string | null
    ID_cliente: number | null
    ID_proyecto: number | null
    ID_estado_documento: number | null
    ID_area: number | null
    ID_usuario: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type DocumentoCountAggregateOutputType = {
    ID_documento: number
    nombre_documento: number
    tipo_documento: number
    archivo: number
    descripcion: number
    folio: number
    ID_cliente: number
    ID_proyecto: number
    ID_estado_documento: number
    ID_area: number
    ID_usuario: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type DocumentoAvgAggregateInputType = {
    ID_documento?: true
    ID_cliente?: true
    ID_proyecto?: true
    ID_estado_documento?: true
    ID_area?: true
    ID_usuario?: true
  }

  export type DocumentoSumAggregateInputType = {
    ID_documento?: true
    ID_cliente?: true
    ID_proyecto?: true
    ID_estado_documento?: true
    ID_area?: true
    ID_usuario?: true
  }

  export type DocumentoMinAggregateInputType = {
    ID_documento?: true
    nombre_documento?: true
    tipo_documento?: true
    archivo?: true
    descripcion?: true
    folio?: true
    ID_cliente?: true
    ID_proyecto?: true
    ID_estado_documento?: true
    ID_area?: true
    ID_usuario?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type DocumentoMaxAggregateInputType = {
    ID_documento?: true
    nombre_documento?: true
    tipo_documento?: true
    archivo?: true
    descripcion?: true
    folio?: true
    ID_cliente?: true
    ID_proyecto?: true
    ID_estado_documento?: true
    ID_area?: true
    ID_usuario?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type DocumentoCountAggregateInputType = {
    ID_documento?: true
    nombre_documento?: true
    tipo_documento?: true
    archivo?: true
    descripcion?: true
    folio?: true
    ID_cliente?: true
    ID_proyecto?: true
    ID_estado_documento?: true
    ID_area?: true
    ID_usuario?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type DocumentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documento to aggregate.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documentos
    **/
    _count?: true | DocumentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentoMaxAggregateInputType
  }

  export type GetDocumentoAggregateType<T extends DocumentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumento[P]>
      : GetScalarType<T[P], AggregateDocumento[P]>
  }




  export type DocumentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithAggregationInput | DocumentoOrderByWithAggregationInput[]
    by: DocumentoScalarFieldEnum[] | DocumentoScalarFieldEnum
    having?: DocumentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentoCountAggregateInputType | true
    _avg?: DocumentoAvgAggregateInputType
    _sum?: DocumentoSumAggregateInputType
    _min?: DocumentoMinAggregateInputType
    _max?: DocumentoMaxAggregateInputType
  }

  export type DocumentoGroupByOutputType = {
    ID_documento: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_cliente: number
    ID_proyecto: number
    ID_estado_documento: number
    ID_area: number
    ID_usuario: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: DocumentoCountAggregateOutputType | null
    _avg: DocumentoAvgAggregateOutputType | null
    _sum: DocumentoSumAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  type GetDocumentoGroupByPayload<T extends DocumentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
        }
      >
    >


  export type DocumentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_documento?: boolean
    nombre_documento?: boolean
    tipo_documento?: boolean
    archivo?: boolean
    descripcion?: boolean
    folio?: boolean
    ID_cliente?: boolean
    ID_proyecto?: boolean
    ID_estado_documento?: boolean
    ID_area?: boolean
    ID_usuario?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    estado?: boolean | Estado_documentoDefaultArgs<ExtArgs>
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    historiales?: boolean | Documento$historialesArgs<ExtArgs>
    _count?: boolean | DocumentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_documento?: boolean
    nombre_documento?: boolean
    tipo_documento?: boolean
    archivo?: boolean
    descripcion?: boolean
    folio?: boolean
    ID_cliente?: boolean
    ID_proyecto?: boolean
    ID_estado_documento?: boolean
    ID_area?: boolean
    ID_usuario?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    estado?: boolean | Estado_documentoDefaultArgs<ExtArgs>
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_documento?: boolean
    nombre_documento?: boolean
    tipo_documento?: boolean
    archivo?: boolean
    descripcion?: boolean
    folio?: boolean
    ID_cliente?: boolean
    ID_proyecto?: boolean
    ID_estado_documento?: boolean
    ID_area?: boolean
    ID_usuario?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    estado?: boolean | Estado_documentoDefaultArgs<ExtArgs>
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectScalar = {
    ID_documento?: boolean
    nombre_documento?: boolean
    tipo_documento?: boolean
    archivo?: boolean
    descripcion?: boolean
    folio?: boolean
    ID_cliente?: boolean
    ID_proyecto?: boolean
    ID_estado_documento?: boolean
    ID_area?: boolean
    ID_usuario?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type DocumentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_documento" | "nombre_documento" | "tipo_documento" | "archivo" | "descripcion" | "folio" | "ID_cliente" | "ID_proyecto" | "ID_estado_documento" | "ID_area" | "ID_usuario" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["documento"]>
  export type DocumentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    estado?: boolean | Estado_documentoDefaultArgs<ExtArgs>
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    historiales?: boolean | Documento$historialesArgs<ExtArgs>
    _count?: boolean | DocumentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    estado?: boolean | Estado_documentoDefaultArgs<ExtArgs>
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
  }
  export type DocumentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    estado?: boolean | Estado_documentoDefaultArgs<ExtArgs>
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
  }

  export type $DocumentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documento"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      area: Prisma.$AreaPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
      estado: Prisma.$Estado_documentoPayload<ExtArgs>
      proyecto: Prisma.$ProyectoPayload<ExtArgs>
      historiales: Prisma.$Historial_documentosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_documento: number
      nombre_documento: string
      tipo_documento: string
      archivo: string
      descripcion: string
      folio: string
      ID_cliente: number
      ID_proyecto: number
      ID_estado_documento: number
      ID_area: number
      ID_usuario: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["documento"]>
    composites: {}
  }

  type DocumentoGetPayload<S extends boolean | null | undefined | DocumentoDefaultArgs> = $Result.GetResult<Prisma.$DocumentoPayload, S>

  type DocumentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentoCountAggregateInputType | true
    }

  export interface DocumentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documento'], meta: { name: 'Documento' } }
    /**
     * Find zero or one Documento that matches the filter.
     * @param {DocumentoFindUniqueArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentoFindUniqueArgs>(args: SelectSubset<T, DocumentoFindUniqueArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentoFindUniqueOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentoFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindFirstArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentoFindFirstArgs>(args?: SelectSubset<T, DocumentoFindFirstArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindFirstOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentoFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documentos
     * const documentos = await prisma.documento.findMany()
     * 
     * // Get first 10 Documentos
     * const documentos = await prisma.documento.findMany({ take: 10 })
     * 
     * // Only select the `ID_documento`
     * const documentoWithID_documentoOnly = await prisma.documento.findMany({ select: { ID_documento: true } })
     * 
     */
    findMany<T extends DocumentoFindManyArgs>(args?: SelectSubset<T, DocumentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documento.
     * @param {DocumentoCreateArgs} args - Arguments to create a Documento.
     * @example
     * // Create one Documento
     * const Documento = await prisma.documento.create({
     *   data: {
     *     // ... data to create a Documento
     *   }
     * })
     * 
     */
    create<T extends DocumentoCreateArgs>(args: SelectSubset<T, DocumentoCreateArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documentos.
     * @param {DocumentoCreateManyArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documento = await prisma.documento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentoCreateManyArgs>(args?: SelectSubset<T, DocumentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documentos and returns the data saved in the database.
     * @param {DocumentoCreateManyAndReturnArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documento = await prisma.documento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documentos and only return the `ID_documento`
     * const documentoWithID_documentoOnly = await prisma.documento.createManyAndReturn({
     *   select: { ID_documento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentoCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documento.
     * @param {DocumentoDeleteArgs} args - Arguments to delete one Documento.
     * @example
     * // Delete one Documento
     * const Documento = await prisma.documento.delete({
     *   where: {
     *     // ... filter to delete one Documento
     *   }
     * })
     * 
     */
    delete<T extends DocumentoDeleteArgs>(args: SelectSubset<T, DocumentoDeleteArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documento.
     * @param {DocumentoUpdateArgs} args - Arguments to update one Documento.
     * @example
     * // Update one Documento
     * const documento = await prisma.documento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentoUpdateArgs>(args: SelectSubset<T, DocumentoUpdateArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documentos.
     * @param {DocumentoDeleteManyArgs} args - Arguments to filter Documentos to delete.
     * @example
     * // Delete a few Documentos
     * const { count } = await prisma.documento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentoDeleteManyArgs>(args?: SelectSubset<T, DocumentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documentos
     * const documento = await prisma.documento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentoUpdateManyArgs>(args: SelectSubset<T, DocumentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos and returns the data updated in the database.
     * @param {DocumentoUpdateManyAndReturnArgs} args - Arguments to update many Documentos.
     * @example
     * // Update many Documentos
     * const documento = await prisma.documento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documentos and only return the `ID_documento`
     * const documentoWithID_documentoOnly = await prisma.documento.updateManyAndReturn({
     *   select: { ID_documento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentoUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documento.
     * @param {DocumentoUpsertArgs} args - Arguments to update or create a Documento.
     * @example
     * // Update or create a Documento
     * const documento = await prisma.documento.upsert({
     *   create: {
     *     // ... data to create a Documento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documento we want to update
     *   }
     * })
     */
    upsert<T extends DocumentoUpsertArgs>(args: SelectSubset<T, DocumentoUpsertArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoCountArgs} args - Arguments to filter Documentos to count.
     * @example
     * // Count the number of Documentos
     * const count = await prisma.documento.count({
     *   where: {
     *     // ... the filter for the Documentos we want to count
     *   }
     * })
    **/
    count<T extends DocumentoCountArgs>(
      args?: Subset<T, DocumentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentoAggregateArgs>(args: Subset<T, DocumentoAggregateArgs>): Prisma.PrismaPromise<GetDocumentoAggregateType<T>>

    /**
     * Group by Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentoGroupByArgs['orderBy'] }
        : { orderBy?: DocumentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documento model
   */
  readonly fields: DocumentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estado<T extends Estado_documentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Estado_documentoDefaultArgs<ExtArgs>>): Prisma__Estado_documentoClient<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proyecto<T extends ProyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProyectoDefaultArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    historiales<T extends Documento$historialesArgs<ExtArgs> = {}>(args?: Subset<T, Documento$historialesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Documento model
   */
  interface DocumentoFieldRefs {
    readonly ID_documento: FieldRef<"Documento", 'Int'>
    readonly nombre_documento: FieldRef<"Documento", 'String'>
    readonly tipo_documento: FieldRef<"Documento", 'String'>
    readonly archivo: FieldRef<"Documento", 'String'>
    readonly descripcion: FieldRef<"Documento", 'String'>
    readonly folio: FieldRef<"Documento", 'String'>
    readonly ID_cliente: FieldRef<"Documento", 'Int'>
    readonly ID_proyecto: FieldRef<"Documento", 'Int'>
    readonly ID_estado_documento: FieldRef<"Documento", 'Int'>
    readonly ID_area: FieldRef<"Documento", 'Int'>
    readonly ID_usuario: FieldRef<"Documento", 'Int'>
    readonly created_at: FieldRef<"Documento", 'DateTime'>
    readonly updated_at: FieldRef<"Documento", 'DateTime'>
    readonly deleted_at: FieldRef<"Documento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Documento findUnique
   */
  export type DocumentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento findUniqueOrThrow
   */
  export type DocumentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento findFirst
   */
  export type DocumentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento findFirstOrThrow
   */
  export type DocumentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento findMany
   */
  export type DocumentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documentos to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento create
   */
  export type DocumentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Documento.
     */
    data: XOR<DocumentoCreateInput, DocumentoUncheckedCreateInput>
  }

  /**
   * Documento createMany
   */
  export type DocumentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documentos.
     */
    data: DocumentoCreateManyInput | DocumentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documento createManyAndReturn
   */
  export type DocumentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * The data used to create many Documentos.
     */
    data: DocumentoCreateManyInput | DocumentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documento update
   */
  export type DocumentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Documento.
     */
    data: XOR<DocumentoUpdateInput, DocumentoUncheckedUpdateInput>
    /**
     * Choose, which Documento to update.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento updateMany
   */
  export type DocumentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documentos.
     */
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyInput>
    /**
     * Filter which Documentos to update
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to update.
     */
    limit?: number
  }

  /**
   * Documento updateManyAndReturn
   */
  export type DocumentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * The data used to update Documentos.
     */
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyInput>
    /**
     * Filter which Documentos to update
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documento upsert
   */
  export type DocumentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Documento to update in case it exists.
     */
    where: DocumentoWhereUniqueInput
    /**
     * In case the Documento found by the `where` argument doesn't exist, create a new Documento with this data.
     */
    create: XOR<DocumentoCreateInput, DocumentoUncheckedCreateInput>
    /**
     * In case the Documento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentoUpdateInput, DocumentoUncheckedUpdateInput>
  }

  /**
   * Documento delete
   */
  export type DocumentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter which Documento to delete.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento deleteMany
   */
  export type DocumentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documentos to delete
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to delete.
     */
    limit?: number
  }

  /**
   * Documento.historiales
   */
  export type Documento$historialesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
    where?: Historial_documentosWhereInput
    orderBy?: Historial_documentosOrderByWithRelationInput | Historial_documentosOrderByWithRelationInput[]
    cursor?: Historial_documentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historial_documentosScalarFieldEnum | Historial_documentosScalarFieldEnum[]
  }

  /**
   * Documento without action
   */
  export type DocumentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
  }


  /**
   * Model Historial_documentos
   */

  export type AggregateHistorial_documentos = {
    _count: Historial_documentosCountAggregateOutputType | null
    _avg: Historial_documentosAvgAggregateOutputType | null
    _sum: Historial_documentosSumAggregateOutputType | null
    _min: Historial_documentosMinAggregateOutputType | null
    _max: Historial_documentosMaxAggregateOutputType | null
  }

  export type Historial_documentosAvgAggregateOutputType = {
    ID_historial: number | null
    ID_documento: number | null
    ID_usuario: number | null
    ID_estado_documento: number | null
  }

  export type Historial_documentosSumAggregateOutputType = {
    ID_historial: number | null
    ID_documento: number | null
    ID_usuario: number | null
    ID_estado_documento: number | null
  }

  export type Historial_documentosMinAggregateOutputType = {
    ID_historial: number | null
    fecha: Date | null
    ID_documento: number | null
    ID_usuario: number | null
    ID_estado_documento: number | null
    documento_historial: string | null
    descripcion: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Historial_documentosMaxAggregateOutputType = {
    ID_historial: number | null
    fecha: Date | null
    ID_documento: number | null
    ID_usuario: number | null
    ID_estado_documento: number | null
    documento_historial: string | null
    descripcion: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Historial_documentosCountAggregateOutputType = {
    ID_historial: number
    fecha: number
    ID_documento: number
    ID_usuario: number
    ID_estado_documento: number
    documento_historial: number
    descripcion: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Historial_documentosAvgAggregateInputType = {
    ID_historial?: true
    ID_documento?: true
    ID_usuario?: true
    ID_estado_documento?: true
  }

  export type Historial_documentosSumAggregateInputType = {
    ID_historial?: true
    ID_documento?: true
    ID_usuario?: true
    ID_estado_documento?: true
  }

  export type Historial_documentosMinAggregateInputType = {
    ID_historial?: true
    fecha?: true
    ID_documento?: true
    ID_usuario?: true
    ID_estado_documento?: true
    documento_historial?: true
    descripcion?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Historial_documentosMaxAggregateInputType = {
    ID_historial?: true
    fecha?: true
    ID_documento?: true
    ID_usuario?: true
    ID_estado_documento?: true
    documento_historial?: true
    descripcion?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Historial_documentosCountAggregateInputType = {
    ID_historial?: true
    fecha?: true
    ID_documento?: true
    ID_usuario?: true
    ID_estado_documento?: true
    documento_historial?: true
    descripcion?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Historial_documentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historial_documentos to aggregate.
     */
    where?: Historial_documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historial_documentos to fetch.
     */
    orderBy?: Historial_documentosOrderByWithRelationInput | Historial_documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Historial_documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historial_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historial_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historial_documentos
    **/
    _count?: true | Historial_documentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Historial_documentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Historial_documentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historial_documentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historial_documentosMaxAggregateInputType
  }

  export type GetHistorial_documentosAggregateType<T extends Historial_documentosAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorial_documentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorial_documentos[P]>
      : GetScalarType<T[P], AggregateHistorial_documentos[P]>
  }




  export type Historial_documentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historial_documentosWhereInput
    orderBy?: Historial_documentosOrderByWithAggregationInput | Historial_documentosOrderByWithAggregationInput[]
    by: Historial_documentosScalarFieldEnum[] | Historial_documentosScalarFieldEnum
    having?: Historial_documentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historial_documentosCountAggregateInputType | true
    _avg?: Historial_documentosAvgAggregateInputType
    _sum?: Historial_documentosSumAggregateInputType
    _min?: Historial_documentosMinAggregateInputType
    _max?: Historial_documentosMaxAggregateInputType
  }

  export type Historial_documentosGroupByOutputType = {
    ID_historial: number
    fecha: Date
    ID_documento: number
    ID_usuario: number
    ID_estado_documento: number
    documento_historial: string
    descripcion: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: Historial_documentosCountAggregateOutputType | null
    _avg: Historial_documentosAvgAggregateOutputType | null
    _sum: Historial_documentosSumAggregateOutputType | null
    _min: Historial_documentosMinAggregateOutputType | null
    _max: Historial_documentosMaxAggregateOutputType | null
  }

  type GetHistorial_documentosGroupByPayload<T extends Historial_documentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historial_documentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historial_documentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historial_documentosGroupByOutputType[P]>
            : GetScalarType<T[P], Historial_documentosGroupByOutputType[P]>
        }
      >
    >


  export type Historial_documentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_historial?: boolean
    fecha?: boolean
    ID_documento?: boolean
    ID_usuario?: boolean
    ID_estado_documento?: boolean
    documento_historial?: boolean
    descripcion?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    documento?: boolean | DocumentoDefaultArgs<ExtArgs>
    estado?: boolean | Estado_documentoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historial_documentos"]>

  export type Historial_documentosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_historial?: boolean
    fecha?: boolean
    ID_documento?: boolean
    ID_usuario?: boolean
    ID_estado_documento?: boolean
    documento_historial?: boolean
    descripcion?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    documento?: boolean | DocumentoDefaultArgs<ExtArgs>
    estado?: boolean | Estado_documentoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historial_documentos"]>

  export type Historial_documentosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_historial?: boolean
    fecha?: boolean
    ID_documento?: boolean
    ID_usuario?: boolean
    ID_estado_documento?: boolean
    documento_historial?: boolean
    descripcion?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    documento?: boolean | DocumentoDefaultArgs<ExtArgs>
    estado?: boolean | Estado_documentoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historial_documentos"]>

  export type Historial_documentosSelectScalar = {
    ID_historial?: boolean
    fecha?: boolean
    ID_documento?: boolean
    ID_usuario?: boolean
    ID_estado_documento?: boolean
    documento_historial?: boolean
    descripcion?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type Historial_documentosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_historial" | "fecha" | "ID_documento" | "ID_usuario" | "ID_estado_documento" | "documento_historial" | "descripcion" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["historial_documentos"]>
  export type Historial_documentosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documento?: boolean | DocumentoDefaultArgs<ExtArgs>
    estado?: boolean | Estado_documentoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type Historial_documentosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documento?: boolean | DocumentoDefaultArgs<ExtArgs>
    estado?: boolean | Estado_documentoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type Historial_documentosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documento?: boolean | DocumentoDefaultArgs<ExtArgs>
    estado?: boolean | Estado_documentoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $Historial_documentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historial_documentos"
    objects: {
      documento: Prisma.$DocumentoPayload<ExtArgs>
      estado: Prisma.$Estado_documentoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_historial: number
      fecha: Date
      ID_documento: number
      ID_usuario: number
      ID_estado_documento: number
      documento_historial: string
      descripcion: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["historial_documentos"]>
    composites: {}
  }

  type Historial_documentosGetPayload<S extends boolean | null | undefined | Historial_documentosDefaultArgs> = $Result.GetResult<Prisma.$Historial_documentosPayload, S>

  type Historial_documentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Historial_documentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historial_documentosCountAggregateInputType | true
    }

  export interface Historial_documentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historial_documentos'], meta: { name: 'Historial_documentos' } }
    /**
     * Find zero or one Historial_documentos that matches the filter.
     * @param {Historial_documentosFindUniqueArgs} args - Arguments to find a Historial_documentos
     * @example
     * // Get one Historial_documentos
     * const historial_documentos = await prisma.historial_documentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Historial_documentosFindUniqueArgs>(args: SelectSubset<T, Historial_documentosFindUniqueArgs<ExtArgs>>): Prisma__Historial_documentosClient<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historial_documentos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Historial_documentosFindUniqueOrThrowArgs} args - Arguments to find a Historial_documentos
     * @example
     * // Get one Historial_documentos
     * const historial_documentos = await prisma.historial_documentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Historial_documentosFindUniqueOrThrowArgs>(args: SelectSubset<T, Historial_documentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Historial_documentosClient<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historial_documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_documentosFindFirstArgs} args - Arguments to find a Historial_documentos
     * @example
     * // Get one Historial_documentos
     * const historial_documentos = await prisma.historial_documentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Historial_documentosFindFirstArgs>(args?: SelectSubset<T, Historial_documentosFindFirstArgs<ExtArgs>>): Prisma__Historial_documentosClient<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historial_documentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_documentosFindFirstOrThrowArgs} args - Arguments to find a Historial_documentos
     * @example
     * // Get one Historial_documentos
     * const historial_documentos = await prisma.historial_documentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Historial_documentosFindFirstOrThrowArgs>(args?: SelectSubset<T, Historial_documentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__Historial_documentosClient<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historial_documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_documentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historial_documentos
     * const historial_documentos = await prisma.historial_documentos.findMany()
     * 
     * // Get first 10 Historial_documentos
     * const historial_documentos = await prisma.historial_documentos.findMany({ take: 10 })
     * 
     * // Only select the `ID_historial`
     * const historial_documentosWithID_historialOnly = await prisma.historial_documentos.findMany({ select: { ID_historial: true } })
     * 
     */
    findMany<T extends Historial_documentosFindManyArgs>(args?: SelectSubset<T, Historial_documentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historial_documentos.
     * @param {Historial_documentosCreateArgs} args - Arguments to create a Historial_documentos.
     * @example
     * // Create one Historial_documentos
     * const Historial_documentos = await prisma.historial_documentos.create({
     *   data: {
     *     // ... data to create a Historial_documentos
     *   }
     * })
     * 
     */
    create<T extends Historial_documentosCreateArgs>(args: SelectSubset<T, Historial_documentosCreateArgs<ExtArgs>>): Prisma__Historial_documentosClient<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historial_documentos.
     * @param {Historial_documentosCreateManyArgs} args - Arguments to create many Historial_documentos.
     * @example
     * // Create many Historial_documentos
     * const historial_documentos = await prisma.historial_documentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Historial_documentosCreateManyArgs>(args?: SelectSubset<T, Historial_documentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historial_documentos and returns the data saved in the database.
     * @param {Historial_documentosCreateManyAndReturnArgs} args - Arguments to create many Historial_documentos.
     * @example
     * // Create many Historial_documentos
     * const historial_documentos = await prisma.historial_documentos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historial_documentos and only return the `ID_historial`
     * const historial_documentosWithID_historialOnly = await prisma.historial_documentos.createManyAndReturn({
     *   select: { ID_historial: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Historial_documentosCreateManyAndReturnArgs>(args?: SelectSubset<T, Historial_documentosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historial_documentos.
     * @param {Historial_documentosDeleteArgs} args - Arguments to delete one Historial_documentos.
     * @example
     * // Delete one Historial_documentos
     * const Historial_documentos = await prisma.historial_documentos.delete({
     *   where: {
     *     // ... filter to delete one Historial_documentos
     *   }
     * })
     * 
     */
    delete<T extends Historial_documentosDeleteArgs>(args: SelectSubset<T, Historial_documentosDeleteArgs<ExtArgs>>): Prisma__Historial_documentosClient<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historial_documentos.
     * @param {Historial_documentosUpdateArgs} args - Arguments to update one Historial_documentos.
     * @example
     * // Update one Historial_documentos
     * const historial_documentos = await prisma.historial_documentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Historial_documentosUpdateArgs>(args: SelectSubset<T, Historial_documentosUpdateArgs<ExtArgs>>): Prisma__Historial_documentosClient<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historial_documentos.
     * @param {Historial_documentosDeleteManyArgs} args - Arguments to filter Historial_documentos to delete.
     * @example
     * // Delete a few Historial_documentos
     * const { count } = await prisma.historial_documentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Historial_documentosDeleteManyArgs>(args?: SelectSubset<T, Historial_documentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historial_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_documentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historial_documentos
     * const historial_documentos = await prisma.historial_documentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Historial_documentosUpdateManyArgs>(args: SelectSubset<T, Historial_documentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historial_documentos and returns the data updated in the database.
     * @param {Historial_documentosUpdateManyAndReturnArgs} args - Arguments to update many Historial_documentos.
     * @example
     * // Update many Historial_documentos
     * const historial_documentos = await prisma.historial_documentos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historial_documentos and only return the `ID_historial`
     * const historial_documentosWithID_historialOnly = await prisma.historial_documentos.updateManyAndReturn({
     *   select: { ID_historial: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Historial_documentosUpdateManyAndReturnArgs>(args: SelectSubset<T, Historial_documentosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historial_documentos.
     * @param {Historial_documentosUpsertArgs} args - Arguments to update or create a Historial_documentos.
     * @example
     * // Update or create a Historial_documentos
     * const historial_documentos = await prisma.historial_documentos.upsert({
     *   create: {
     *     // ... data to create a Historial_documentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historial_documentos we want to update
     *   }
     * })
     */
    upsert<T extends Historial_documentosUpsertArgs>(args: SelectSubset<T, Historial_documentosUpsertArgs<ExtArgs>>): Prisma__Historial_documentosClient<$Result.GetResult<Prisma.$Historial_documentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historial_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_documentosCountArgs} args - Arguments to filter Historial_documentos to count.
     * @example
     * // Count the number of Historial_documentos
     * const count = await prisma.historial_documentos.count({
     *   where: {
     *     // ... the filter for the Historial_documentos we want to count
     *   }
     * })
    **/
    count<T extends Historial_documentosCountArgs>(
      args?: Subset<T, Historial_documentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historial_documentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historial_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_documentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Historial_documentosAggregateArgs>(args: Subset<T, Historial_documentosAggregateArgs>): Prisma.PrismaPromise<GetHistorial_documentosAggregateType<T>>

    /**
     * Group by Historial_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_documentosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Historial_documentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Historial_documentosGroupByArgs['orderBy'] }
        : { orderBy?: Historial_documentosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Historial_documentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorial_documentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historial_documentos model
   */
  readonly fields: Historial_documentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historial_documentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Historial_documentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documento<T extends DocumentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentoDefaultArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estado<T extends Estado_documentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Estado_documentoDefaultArgs<ExtArgs>>): Prisma__Estado_documentoClient<$Result.GetResult<Prisma.$Estado_documentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Historial_documentos model
   */
  interface Historial_documentosFieldRefs {
    readonly ID_historial: FieldRef<"Historial_documentos", 'Int'>
    readonly fecha: FieldRef<"Historial_documentos", 'DateTime'>
    readonly ID_documento: FieldRef<"Historial_documentos", 'Int'>
    readonly ID_usuario: FieldRef<"Historial_documentos", 'Int'>
    readonly ID_estado_documento: FieldRef<"Historial_documentos", 'Int'>
    readonly documento_historial: FieldRef<"Historial_documentos", 'String'>
    readonly descripcion: FieldRef<"Historial_documentos", 'String'>
    readonly created_at: FieldRef<"Historial_documentos", 'DateTime'>
    readonly updated_at: FieldRef<"Historial_documentos", 'DateTime'>
    readonly deleted_at: FieldRef<"Historial_documentos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Historial_documentos findUnique
   */
  export type Historial_documentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
    /**
     * Filter, which Historial_documentos to fetch.
     */
    where: Historial_documentosWhereUniqueInput
  }

  /**
   * Historial_documentos findUniqueOrThrow
   */
  export type Historial_documentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
    /**
     * Filter, which Historial_documentos to fetch.
     */
    where: Historial_documentosWhereUniqueInput
  }

  /**
   * Historial_documentos findFirst
   */
  export type Historial_documentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
    /**
     * Filter, which Historial_documentos to fetch.
     */
    where?: Historial_documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historial_documentos to fetch.
     */
    orderBy?: Historial_documentosOrderByWithRelationInput | Historial_documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historial_documentos.
     */
    cursor?: Historial_documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historial_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historial_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historial_documentos.
     */
    distinct?: Historial_documentosScalarFieldEnum | Historial_documentosScalarFieldEnum[]
  }

  /**
   * Historial_documentos findFirstOrThrow
   */
  export type Historial_documentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
    /**
     * Filter, which Historial_documentos to fetch.
     */
    where?: Historial_documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historial_documentos to fetch.
     */
    orderBy?: Historial_documentosOrderByWithRelationInput | Historial_documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historial_documentos.
     */
    cursor?: Historial_documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historial_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historial_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historial_documentos.
     */
    distinct?: Historial_documentosScalarFieldEnum | Historial_documentosScalarFieldEnum[]
  }

  /**
   * Historial_documentos findMany
   */
  export type Historial_documentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
    /**
     * Filter, which Historial_documentos to fetch.
     */
    where?: Historial_documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historial_documentos to fetch.
     */
    orderBy?: Historial_documentosOrderByWithRelationInput | Historial_documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historial_documentos.
     */
    cursor?: Historial_documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historial_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historial_documentos.
     */
    skip?: number
    distinct?: Historial_documentosScalarFieldEnum | Historial_documentosScalarFieldEnum[]
  }

  /**
   * Historial_documentos create
   */
  export type Historial_documentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
    /**
     * The data needed to create a Historial_documentos.
     */
    data: XOR<Historial_documentosCreateInput, Historial_documentosUncheckedCreateInput>
  }

  /**
   * Historial_documentos createMany
   */
  export type Historial_documentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historial_documentos.
     */
    data: Historial_documentosCreateManyInput | Historial_documentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historial_documentos createManyAndReturn
   */
  export type Historial_documentosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * The data used to create many Historial_documentos.
     */
    data: Historial_documentosCreateManyInput | Historial_documentosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historial_documentos update
   */
  export type Historial_documentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
    /**
     * The data needed to update a Historial_documentos.
     */
    data: XOR<Historial_documentosUpdateInput, Historial_documentosUncheckedUpdateInput>
    /**
     * Choose, which Historial_documentos to update.
     */
    where: Historial_documentosWhereUniqueInput
  }

  /**
   * Historial_documentos updateMany
   */
  export type Historial_documentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historial_documentos.
     */
    data: XOR<Historial_documentosUpdateManyMutationInput, Historial_documentosUncheckedUpdateManyInput>
    /**
     * Filter which Historial_documentos to update
     */
    where?: Historial_documentosWhereInput
    /**
     * Limit how many Historial_documentos to update.
     */
    limit?: number
  }

  /**
   * Historial_documentos updateManyAndReturn
   */
  export type Historial_documentosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * The data used to update Historial_documentos.
     */
    data: XOR<Historial_documentosUpdateManyMutationInput, Historial_documentosUncheckedUpdateManyInput>
    /**
     * Filter which Historial_documentos to update
     */
    where?: Historial_documentosWhereInput
    /**
     * Limit how many Historial_documentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historial_documentos upsert
   */
  export type Historial_documentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
    /**
     * The filter to search for the Historial_documentos to update in case it exists.
     */
    where: Historial_documentosWhereUniqueInput
    /**
     * In case the Historial_documentos found by the `where` argument doesn't exist, create a new Historial_documentos with this data.
     */
    create: XOR<Historial_documentosCreateInput, Historial_documentosUncheckedCreateInput>
    /**
     * In case the Historial_documentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Historial_documentosUpdateInput, Historial_documentosUncheckedUpdateInput>
  }

  /**
   * Historial_documentos delete
   */
  export type Historial_documentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
    /**
     * Filter which Historial_documentos to delete.
     */
    where: Historial_documentosWhereUniqueInput
  }

  /**
   * Historial_documentos deleteMany
   */
  export type Historial_documentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historial_documentos to delete
     */
    where?: Historial_documentosWhereInput
    /**
     * Limit how many Historial_documentos to delete.
     */
    limit?: number
  }

  /**
   * Historial_documentos without action
   */
  export type Historial_documentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historial_documentos
     */
    select?: Historial_documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historial_documentos
     */
    omit?: Historial_documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historial_documentosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    ID_cliente: 'ID_cliente',
    nombre: 'nombre',
    apellido: 'apellido',
    nombre_departamento: 'nombre_departamento',
    nombre_provincia: 'nombre_provincia',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ProyectoScalarFieldEnum: {
    ID_proyecto: 'ID_proyecto',
    nombre: 'nombre',
    descripcion: 'descripcion',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ProyectoScalarFieldEnum = (typeof ProyectoScalarFieldEnum)[keyof typeof ProyectoScalarFieldEnum]


  export const Estado_documentoScalarFieldEnum: {
    ID_estado: 'ID_estado',
    estado: 'estado',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Estado_documentoScalarFieldEnum = (typeof Estado_documentoScalarFieldEnum)[keyof typeof Estado_documentoScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    ID_area: 'ID_area',
    nombre: 'nombre',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    ID_usuario: 'ID_usuario',
    nombre: 'nombre',
    apellido: 'apellido',
    correo: 'correo',
    contrasena: 'contrasena',
    rol: 'rol',
    permisos: 'permisos',
    estado: 'estado',
    fecha_ingreso: 'fecha_ingreso',
    ID_area: 'ID_area',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const DocumentoScalarFieldEnum: {
    ID_documento: 'ID_documento',
    nombre_documento: 'nombre_documento',
    tipo_documento: 'tipo_documento',
    archivo: 'archivo',
    descripcion: 'descripcion',
    folio: 'folio',
    ID_cliente: 'ID_cliente',
    ID_proyecto: 'ID_proyecto',
    ID_estado_documento: 'ID_estado_documento',
    ID_area: 'ID_area',
    ID_usuario: 'ID_usuario',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type DocumentoScalarFieldEnum = (typeof DocumentoScalarFieldEnum)[keyof typeof DocumentoScalarFieldEnum]


  export const Historial_documentosScalarFieldEnum: {
    ID_historial: 'ID_historial',
    fecha: 'fecha',
    ID_documento: 'ID_documento',
    ID_usuario: 'ID_usuario',
    ID_estado_documento: 'ID_estado_documento',
    documento_historial: 'documento_historial',
    descripcion: 'descripcion',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Historial_documentosScalarFieldEnum = (typeof Historial_documentosScalarFieldEnum)[keyof typeof Historial_documentosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    ID_cliente?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    apellido?: StringFilter<"Cliente"> | string
    nombre_departamento?: StringFilter<"Cliente"> | string
    nombre_provincia?: StringFilter<"Cliente"> | string
    created_at?: DateTimeFilter<"Cliente"> | Date | string
    updated_at?: DateTimeFilter<"Cliente"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    documentos?: DocumentoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    ID_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    nombre_departamento?: SortOrder
    nombre_provincia?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    documentos?: DocumentoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    ID_cliente?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    apellido?: StringFilter<"Cliente"> | string
    nombre_departamento?: StringFilter<"Cliente"> | string
    nombre_provincia?: StringFilter<"Cliente"> | string
    created_at?: DateTimeFilter<"Cliente"> | Date | string
    updated_at?: DateTimeFilter<"Cliente"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    documentos?: DocumentoListRelationFilter
  }, "ID_cliente">

  export type ClienteOrderByWithAggregationInput = {
    ID_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    nombre_departamento?: SortOrder
    nombre_provincia?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    ID_cliente?: IntWithAggregatesFilter<"Cliente"> | number
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    apellido?: StringWithAggregatesFilter<"Cliente"> | string
    nombre_departamento?: StringWithAggregatesFilter<"Cliente"> | string
    nombre_provincia?: StringWithAggregatesFilter<"Cliente"> | string
    created_at?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Cliente"> | Date | string | null
  }

  export type ProyectoWhereInput = {
    AND?: ProyectoWhereInput | ProyectoWhereInput[]
    OR?: ProyectoWhereInput[]
    NOT?: ProyectoWhereInput | ProyectoWhereInput[]
    ID_proyecto?: IntFilter<"Proyecto"> | number
    nombre?: StringFilter<"Proyecto"> | string
    descripcion?: StringFilter<"Proyecto"> | string
    created_at?: DateTimeFilter<"Proyecto"> | Date | string
    updated_at?: DateTimeFilter<"Proyecto"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Proyecto"> | Date | string | null
    documentos?: DocumentoListRelationFilter
  }

  export type ProyectoOrderByWithRelationInput = {
    ID_proyecto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    documentos?: DocumentoOrderByRelationAggregateInput
  }

  export type ProyectoWhereUniqueInput = Prisma.AtLeast<{
    ID_proyecto?: number
    AND?: ProyectoWhereInput | ProyectoWhereInput[]
    OR?: ProyectoWhereInput[]
    NOT?: ProyectoWhereInput | ProyectoWhereInput[]
    nombre?: StringFilter<"Proyecto"> | string
    descripcion?: StringFilter<"Proyecto"> | string
    created_at?: DateTimeFilter<"Proyecto"> | Date | string
    updated_at?: DateTimeFilter<"Proyecto"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Proyecto"> | Date | string | null
    documentos?: DocumentoListRelationFilter
  }, "ID_proyecto">

  export type ProyectoOrderByWithAggregationInput = {
    ID_proyecto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ProyectoCountOrderByAggregateInput
    _avg?: ProyectoAvgOrderByAggregateInput
    _max?: ProyectoMaxOrderByAggregateInput
    _min?: ProyectoMinOrderByAggregateInput
    _sum?: ProyectoSumOrderByAggregateInput
  }

  export type ProyectoScalarWhereWithAggregatesInput = {
    AND?: ProyectoScalarWhereWithAggregatesInput | ProyectoScalarWhereWithAggregatesInput[]
    OR?: ProyectoScalarWhereWithAggregatesInput[]
    NOT?: ProyectoScalarWhereWithAggregatesInput | ProyectoScalarWhereWithAggregatesInput[]
    ID_proyecto?: IntWithAggregatesFilter<"Proyecto"> | number
    nombre?: StringWithAggregatesFilter<"Proyecto"> | string
    descripcion?: StringWithAggregatesFilter<"Proyecto"> | string
    created_at?: DateTimeWithAggregatesFilter<"Proyecto"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Proyecto"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Proyecto"> | Date | string | null
  }

  export type Estado_documentoWhereInput = {
    AND?: Estado_documentoWhereInput | Estado_documentoWhereInput[]
    OR?: Estado_documentoWhereInput[]
    NOT?: Estado_documentoWhereInput | Estado_documentoWhereInput[]
    ID_estado?: IntFilter<"Estado_documento"> | number
    estado?: StringFilter<"Estado_documento"> | string
    created_at?: DateTimeFilter<"Estado_documento"> | Date | string
    updated_at?: DateTimeFilter<"Estado_documento"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Estado_documento"> | Date | string | null
    documentos?: DocumentoListRelationFilter
    historiales?: Historial_documentosListRelationFilter
  }

  export type Estado_documentoOrderByWithRelationInput = {
    ID_estado?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    documentos?: DocumentoOrderByRelationAggregateInput
    historiales?: Historial_documentosOrderByRelationAggregateInput
  }

  export type Estado_documentoWhereUniqueInput = Prisma.AtLeast<{
    ID_estado?: number
    AND?: Estado_documentoWhereInput | Estado_documentoWhereInput[]
    OR?: Estado_documentoWhereInput[]
    NOT?: Estado_documentoWhereInput | Estado_documentoWhereInput[]
    estado?: StringFilter<"Estado_documento"> | string
    created_at?: DateTimeFilter<"Estado_documento"> | Date | string
    updated_at?: DateTimeFilter<"Estado_documento"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Estado_documento"> | Date | string | null
    documentos?: DocumentoListRelationFilter
    historiales?: Historial_documentosListRelationFilter
  }, "ID_estado">

  export type Estado_documentoOrderByWithAggregationInput = {
    ID_estado?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: Estado_documentoCountOrderByAggregateInput
    _avg?: Estado_documentoAvgOrderByAggregateInput
    _max?: Estado_documentoMaxOrderByAggregateInput
    _min?: Estado_documentoMinOrderByAggregateInput
    _sum?: Estado_documentoSumOrderByAggregateInput
  }

  export type Estado_documentoScalarWhereWithAggregatesInput = {
    AND?: Estado_documentoScalarWhereWithAggregatesInput | Estado_documentoScalarWhereWithAggregatesInput[]
    OR?: Estado_documentoScalarWhereWithAggregatesInput[]
    NOT?: Estado_documentoScalarWhereWithAggregatesInput | Estado_documentoScalarWhereWithAggregatesInput[]
    ID_estado?: IntWithAggregatesFilter<"Estado_documento"> | number
    estado?: StringWithAggregatesFilter<"Estado_documento"> | string
    created_at?: DateTimeWithAggregatesFilter<"Estado_documento"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Estado_documento"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Estado_documento"> | Date | string | null
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    ID_area?: IntFilter<"Area"> | number
    nombre?: StringFilter<"Area"> | string
    created_at?: DateTimeFilter<"Area"> | Date | string
    updated_at?: DateTimeFilter<"Area"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Area"> | Date | string | null
    documentos?: DocumentoListRelationFilter
    usuarios?: UsuarioListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    ID_area?: SortOrder
    nombre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    documentos?: DocumentoOrderByRelationAggregateInput
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    ID_area?: number
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    nombre?: StringFilter<"Area"> | string
    created_at?: DateTimeFilter<"Area"> | Date | string
    updated_at?: DateTimeFilter<"Area"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Area"> | Date | string | null
    documentos?: DocumentoListRelationFilter
    usuarios?: UsuarioListRelationFilter
  }, "ID_area">

  export type AreaOrderByWithAggregationInput = {
    ID_area?: SortOrder
    nombre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    ID_area?: IntWithAggregatesFilter<"Area"> | number
    nombre?: StringWithAggregatesFilter<"Area"> | string
    created_at?: DateTimeWithAggregatesFilter<"Area"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Area"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Area"> | Date | string | null
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    ID_usuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    permisos?: StringNullableListFilter<"Usuario">
    estado?: StringFilter<"Usuario"> | string
    fecha_ingreso?: DateTimeFilter<"Usuario"> | Date | string
    ID_area?: IntFilter<"Usuario"> | number
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    documentos?: DocumentoListRelationFilter
    historiales?: Historial_documentosListRelationFilter
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
  }

  export type UsuarioOrderByWithRelationInput = {
    ID_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    permisos?: SortOrder
    estado?: SortOrder
    fecha_ingreso?: SortOrder
    ID_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    documentos?: DocumentoOrderByRelationAggregateInput
    historiales?: Historial_documentosOrderByRelationAggregateInput
    area?: AreaOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    ID_usuario?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    permisos?: StringNullableListFilter<"Usuario">
    estado?: StringFilter<"Usuario"> | string
    fecha_ingreso?: DateTimeFilter<"Usuario"> | Date | string
    ID_area?: IntFilter<"Usuario"> | number
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    documentos?: DocumentoListRelationFilter
    historiales?: Historial_documentosListRelationFilter
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
  }, "ID_usuario" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    ID_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    permisos?: SortOrder
    estado?: SortOrder
    fecha_ingreso?: SortOrder
    ID_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    ID_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: StringWithAggregatesFilter<"Usuario"> | string
    permisos?: StringNullableListFilter<"Usuario">
    estado?: StringWithAggregatesFilter<"Usuario"> | string
    fecha_ingreso?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    ID_area?: IntWithAggregatesFilter<"Usuario"> | number
    created_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
  }

  export type DocumentoWhereInput = {
    AND?: DocumentoWhereInput | DocumentoWhereInput[]
    OR?: DocumentoWhereInput[]
    NOT?: DocumentoWhereInput | DocumentoWhereInput[]
    ID_documento?: IntFilter<"Documento"> | number
    nombre_documento?: StringFilter<"Documento"> | string
    tipo_documento?: StringFilter<"Documento"> | string
    archivo?: StringFilter<"Documento"> | string
    descripcion?: StringFilter<"Documento"> | string
    folio?: StringFilter<"Documento"> | string
    ID_cliente?: IntFilter<"Documento"> | number
    ID_proyecto?: IntFilter<"Documento"> | number
    ID_estado_documento?: IntFilter<"Documento"> | number
    ID_area?: IntFilter<"Documento"> | number
    ID_usuario?: IntFilter<"Documento"> | number
    created_at?: DateTimeFilter<"Documento"> | Date | string
    updated_at?: DateTimeFilter<"Documento"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Documento"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    estado?: XOR<Estado_documentoScalarRelationFilter, Estado_documentoWhereInput>
    proyecto?: XOR<ProyectoScalarRelationFilter, ProyectoWhereInput>
    historiales?: Historial_documentosListRelationFilter
  }

  export type DocumentoOrderByWithRelationInput = {
    ID_documento?: SortOrder
    nombre_documento?: SortOrder
    tipo_documento?: SortOrder
    archivo?: SortOrder
    descripcion?: SortOrder
    folio?: SortOrder
    ID_cliente?: SortOrder
    ID_proyecto?: SortOrder
    ID_estado_documento?: SortOrder
    ID_area?: SortOrder
    ID_usuario?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    area?: AreaOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
    estado?: Estado_documentoOrderByWithRelationInput
    proyecto?: ProyectoOrderByWithRelationInput
    historiales?: Historial_documentosOrderByRelationAggregateInput
  }

  export type DocumentoWhereUniqueInput = Prisma.AtLeast<{
    ID_documento?: number
    AND?: DocumentoWhereInput | DocumentoWhereInput[]
    OR?: DocumentoWhereInput[]
    NOT?: DocumentoWhereInput | DocumentoWhereInput[]
    nombre_documento?: StringFilter<"Documento"> | string
    tipo_documento?: StringFilter<"Documento"> | string
    archivo?: StringFilter<"Documento"> | string
    descripcion?: StringFilter<"Documento"> | string
    folio?: StringFilter<"Documento"> | string
    ID_cliente?: IntFilter<"Documento"> | number
    ID_proyecto?: IntFilter<"Documento"> | number
    ID_estado_documento?: IntFilter<"Documento"> | number
    ID_area?: IntFilter<"Documento"> | number
    ID_usuario?: IntFilter<"Documento"> | number
    created_at?: DateTimeFilter<"Documento"> | Date | string
    updated_at?: DateTimeFilter<"Documento"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Documento"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    estado?: XOR<Estado_documentoScalarRelationFilter, Estado_documentoWhereInput>
    proyecto?: XOR<ProyectoScalarRelationFilter, ProyectoWhereInput>
    historiales?: Historial_documentosListRelationFilter
  }, "ID_documento">

  export type DocumentoOrderByWithAggregationInput = {
    ID_documento?: SortOrder
    nombre_documento?: SortOrder
    tipo_documento?: SortOrder
    archivo?: SortOrder
    descripcion?: SortOrder
    folio?: SortOrder
    ID_cliente?: SortOrder
    ID_proyecto?: SortOrder
    ID_estado_documento?: SortOrder
    ID_area?: SortOrder
    ID_usuario?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: DocumentoCountOrderByAggregateInput
    _avg?: DocumentoAvgOrderByAggregateInput
    _max?: DocumentoMaxOrderByAggregateInput
    _min?: DocumentoMinOrderByAggregateInput
    _sum?: DocumentoSumOrderByAggregateInput
  }

  export type DocumentoScalarWhereWithAggregatesInput = {
    AND?: DocumentoScalarWhereWithAggregatesInput | DocumentoScalarWhereWithAggregatesInput[]
    OR?: DocumentoScalarWhereWithAggregatesInput[]
    NOT?: DocumentoScalarWhereWithAggregatesInput | DocumentoScalarWhereWithAggregatesInput[]
    ID_documento?: IntWithAggregatesFilter<"Documento"> | number
    nombre_documento?: StringWithAggregatesFilter<"Documento"> | string
    tipo_documento?: StringWithAggregatesFilter<"Documento"> | string
    archivo?: StringWithAggregatesFilter<"Documento"> | string
    descripcion?: StringWithAggregatesFilter<"Documento"> | string
    folio?: StringWithAggregatesFilter<"Documento"> | string
    ID_cliente?: IntWithAggregatesFilter<"Documento"> | number
    ID_proyecto?: IntWithAggregatesFilter<"Documento"> | number
    ID_estado_documento?: IntWithAggregatesFilter<"Documento"> | number
    ID_area?: IntWithAggregatesFilter<"Documento"> | number
    ID_usuario?: IntWithAggregatesFilter<"Documento"> | number
    created_at?: DateTimeWithAggregatesFilter<"Documento"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Documento"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Documento"> | Date | string | null
  }

  export type Historial_documentosWhereInput = {
    AND?: Historial_documentosWhereInput | Historial_documentosWhereInput[]
    OR?: Historial_documentosWhereInput[]
    NOT?: Historial_documentosWhereInput | Historial_documentosWhereInput[]
    ID_historial?: IntFilter<"Historial_documentos"> | number
    fecha?: DateTimeFilter<"Historial_documentos"> | Date | string
    ID_documento?: IntFilter<"Historial_documentos"> | number
    ID_usuario?: IntFilter<"Historial_documentos"> | number
    ID_estado_documento?: IntFilter<"Historial_documentos"> | number
    documento_historial?: StringFilter<"Historial_documentos"> | string
    descripcion?: StringFilter<"Historial_documentos"> | string
    created_at?: DateTimeFilter<"Historial_documentos"> | Date | string
    updated_at?: DateTimeFilter<"Historial_documentos"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Historial_documentos"> | Date | string | null
    documento?: XOR<DocumentoScalarRelationFilter, DocumentoWhereInput>
    estado?: XOR<Estado_documentoScalarRelationFilter, Estado_documentoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type Historial_documentosOrderByWithRelationInput = {
    ID_historial?: SortOrder
    fecha?: SortOrder
    ID_documento?: SortOrder
    ID_usuario?: SortOrder
    ID_estado_documento?: SortOrder
    documento_historial?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    documento?: DocumentoOrderByWithRelationInput
    estado?: Estado_documentoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type Historial_documentosWhereUniqueInput = Prisma.AtLeast<{
    ID_historial?: number
    AND?: Historial_documentosWhereInput | Historial_documentosWhereInput[]
    OR?: Historial_documentosWhereInput[]
    NOT?: Historial_documentosWhereInput | Historial_documentosWhereInput[]
    fecha?: DateTimeFilter<"Historial_documentos"> | Date | string
    ID_documento?: IntFilter<"Historial_documentos"> | number
    ID_usuario?: IntFilter<"Historial_documentos"> | number
    ID_estado_documento?: IntFilter<"Historial_documentos"> | number
    documento_historial?: StringFilter<"Historial_documentos"> | string
    descripcion?: StringFilter<"Historial_documentos"> | string
    created_at?: DateTimeFilter<"Historial_documentos"> | Date | string
    updated_at?: DateTimeFilter<"Historial_documentos"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Historial_documentos"> | Date | string | null
    documento?: XOR<DocumentoScalarRelationFilter, DocumentoWhereInput>
    estado?: XOR<Estado_documentoScalarRelationFilter, Estado_documentoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "ID_historial">

  export type Historial_documentosOrderByWithAggregationInput = {
    ID_historial?: SortOrder
    fecha?: SortOrder
    ID_documento?: SortOrder
    ID_usuario?: SortOrder
    ID_estado_documento?: SortOrder
    documento_historial?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: Historial_documentosCountOrderByAggregateInput
    _avg?: Historial_documentosAvgOrderByAggregateInput
    _max?: Historial_documentosMaxOrderByAggregateInput
    _min?: Historial_documentosMinOrderByAggregateInput
    _sum?: Historial_documentosSumOrderByAggregateInput
  }

  export type Historial_documentosScalarWhereWithAggregatesInput = {
    AND?: Historial_documentosScalarWhereWithAggregatesInput | Historial_documentosScalarWhereWithAggregatesInput[]
    OR?: Historial_documentosScalarWhereWithAggregatesInput[]
    NOT?: Historial_documentosScalarWhereWithAggregatesInput | Historial_documentosScalarWhereWithAggregatesInput[]
    ID_historial?: IntWithAggregatesFilter<"Historial_documentos"> | number
    fecha?: DateTimeWithAggregatesFilter<"Historial_documentos"> | Date | string
    ID_documento?: IntWithAggregatesFilter<"Historial_documentos"> | number
    ID_usuario?: IntWithAggregatesFilter<"Historial_documentos"> | number
    ID_estado_documento?: IntWithAggregatesFilter<"Historial_documentos"> | number
    documento_historial?: StringWithAggregatesFilter<"Historial_documentos"> | string
    descripcion?: StringWithAggregatesFilter<"Historial_documentos"> | string
    created_at?: DateTimeWithAggregatesFilter<"Historial_documentos"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Historial_documentos"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Historial_documentos"> | Date | string | null
  }

  export type ClienteCreateInput = {
    nombre: string
    apellido: string
    nombre_departamento: string
    nombre_provincia: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    ID_cliente?: number
    nombre: string
    apellido: string
    nombre_departamento: string
    nombre_provincia: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_departamento?: StringFieldUpdateOperationsInput | string
    nombre_provincia?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    ID_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_departamento?: StringFieldUpdateOperationsInput | string
    nombre_provincia?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    ID_cliente?: number
    nombre: string
    apellido: string
    nombre_departamento: string
    nombre_provincia: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ClienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_departamento?: StringFieldUpdateOperationsInput | string
    nombre_provincia?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    ID_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_departamento?: StringFieldUpdateOperationsInput | string
    nombre_provincia?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProyectoCreateInput = {
    nombre: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoUncheckedCreateInput = {
    ID_proyecto?: number
    nombre: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoUncheckedUpdateInput = {
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoCreateManyInput = {
    ID_proyecto?: number
    nombre: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ProyectoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProyectoUncheckedUpdateManyInput = {
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Estado_documentoCreateInput = {
    estado: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoCreateNestedManyWithoutEstadoInput
    historiales?: Historial_documentosCreateNestedManyWithoutEstadoInput
  }

  export type Estado_documentoUncheckedCreateInput = {
    ID_estado?: number
    estado: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoUncheckedCreateNestedManyWithoutEstadoInput
    historiales?: Historial_documentosUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type Estado_documentoUpdateInput = {
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUpdateManyWithoutEstadoNestedInput
    historiales?: Historial_documentosUpdateManyWithoutEstadoNestedInput
  }

  export type Estado_documentoUncheckedUpdateInput = {
    ID_estado?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUncheckedUpdateManyWithoutEstadoNestedInput
    historiales?: Historial_documentosUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type Estado_documentoCreateManyInput = {
    ID_estado?: number
    estado: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type Estado_documentoUpdateManyMutationInput = {
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Estado_documentoUncheckedUpdateManyInput = {
    ID_estado?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AreaCreateInput = {
    nombre: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoCreateNestedManyWithoutAreaInput
    usuarios?: UsuarioCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    ID_area?: number
    nombre: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoUncheckedCreateNestedManyWithoutAreaInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUpdateManyWithoutAreaNestedInput
    usuarios?: UsuarioUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    ID_area?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUncheckedUpdateManyWithoutAreaNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    ID_area?: number
    nombre: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AreaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AreaUncheckedUpdateManyInput = {
    ID_area?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioCreateInput = {
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    rol: string
    permisos?: UsuarioCreatepermisosInput | string[]
    estado?: string
    fecha_ingreso?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoCreateNestedManyWithoutUsuarioInput
    historiales?: Historial_documentosCreateNestedManyWithoutUsuarioInput
    area: AreaCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateInput = {
    ID_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    rol: string
    permisos?: UsuarioCreatepermisosInput | string[]
    estado?: string
    fecha_ingreso?: Date | string
    ID_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoUncheckedCreateNestedManyWithoutUsuarioInput
    historiales?: Historial_documentosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: UsuarioUpdatepermisosInput | string[]
    estado?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUpdateManyWithoutUsuarioNestedInput
    historiales?: Historial_documentosUpdateManyWithoutUsuarioNestedInput
    area?: AreaUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    ID_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: UsuarioUpdatepermisosInput | string[]
    estado?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_area?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUncheckedUpdateManyWithoutUsuarioNestedInput
    historiales?: Historial_documentosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    ID_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    rol: string
    permisos?: UsuarioCreatepermisosInput | string[]
    estado?: string
    fecha_ingreso?: Date | string
    ID_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: UsuarioUpdatepermisosInput | string[]
    estado?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    ID_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: UsuarioUpdatepermisosInput | string[]
    estado?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_area?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentoCreateInput = {
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutDocumentosInput
    area: AreaCreateNestedOneWithoutDocumentosInput
    cliente: ClienteCreateNestedOneWithoutDocumentosInput
    estado: Estado_documentoCreateNestedOneWithoutDocumentosInput
    proyecto: ProyectoCreateNestedOneWithoutDocumentosInput
    historiales?: Historial_documentosCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoUncheckedCreateInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_cliente: number
    ID_proyecto: number
    ID_estado_documento: number
    ID_area: number
    ID_usuario: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    historiales?: Historial_documentosUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoUpdateInput = {
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutDocumentosNestedInput
    area?: AreaUpdateOneRequiredWithoutDocumentosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutDocumentosNestedInput
    estado?: Estado_documentoUpdateOneRequiredWithoutDocumentosNestedInput
    proyecto?: ProyectoUpdateOneRequiredWithoutDocumentosNestedInput
    historiales?: Historial_documentosUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_cliente?: IntFieldUpdateOperationsInput | number
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    ID_area?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historiales?: Historial_documentosUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoCreateManyInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_cliente: number
    ID_proyecto: number
    ID_estado_documento: number
    ID_area: number
    ID_usuario: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DocumentoUpdateManyMutationInput = {
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentoUncheckedUpdateManyInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_cliente?: IntFieldUpdateOperationsInput | number
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    ID_area?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Historial_documentosCreateInput = {
    fecha: Date | string
    documento_historial: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documento: DocumentoCreateNestedOneWithoutHistorialesInput
    estado: Estado_documentoCreateNestedOneWithoutHistorialesInput
    usuario: UsuarioCreateNestedOneWithoutHistorialesInput
  }

  export type Historial_documentosUncheckedCreateInput = {
    ID_historial?: number
    fecha: Date | string
    ID_documento: number
    ID_usuario: number
    ID_estado_documento: number
    documento_historial: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type Historial_documentosUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documento?: DocumentoUpdateOneRequiredWithoutHistorialesNestedInput
    estado?: Estado_documentoUpdateOneRequiredWithoutHistorialesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutHistorialesNestedInput
  }

  export type Historial_documentosUncheckedUpdateInput = {
    ID_historial?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_documento?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Historial_documentosCreateManyInput = {
    ID_historial?: number
    fecha: Date | string
    ID_documento: number
    ID_usuario: number
    ID_estado_documento: number
    documento_historial: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type Historial_documentosUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Historial_documentosUncheckedUpdateManyInput = {
    ID_historial?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_documento?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DocumentoListRelationFilter = {
    every?: DocumentoWhereInput
    some?: DocumentoWhereInput
    none?: DocumentoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    ID_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    nombre_departamento?: SortOrder
    nombre_provincia?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    ID_cliente?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    ID_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    nombre_departamento?: SortOrder
    nombre_provincia?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    ID_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    nombre_departamento?: SortOrder
    nombre_provincia?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    ID_cliente?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProyectoCountOrderByAggregateInput = {
    ID_proyecto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ProyectoAvgOrderByAggregateInput = {
    ID_proyecto?: SortOrder
  }

  export type ProyectoMaxOrderByAggregateInput = {
    ID_proyecto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ProyectoMinOrderByAggregateInput = {
    ID_proyecto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ProyectoSumOrderByAggregateInput = {
    ID_proyecto?: SortOrder
  }

  export type Historial_documentosListRelationFilter = {
    every?: Historial_documentosWhereInput
    some?: Historial_documentosWhereInput
    none?: Historial_documentosWhereInput
  }

  export type Historial_documentosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Estado_documentoCountOrderByAggregateInput = {
    ID_estado?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type Estado_documentoAvgOrderByAggregateInput = {
    ID_estado?: SortOrder
  }

  export type Estado_documentoMaxOrderByAggregateInput = {
    ID_estado?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type Estado_documentoMinOrderByAggregateInput = {
    ID_estado?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type Estado_documentoSumOrderByAggregateInput = {
    ID_estado?: SortOrder
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaCountOrderByAggregateInput = {
    ID_area?: SortOrder
    nombre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    ID_area?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    ID_area?: SortOrder
    nombre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    ID_area?: SortOrder
    nombre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    ID_area?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AreaScalarRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type UsuarioCountOrderByAggregateInput = {
    ID_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    permisos?: SortOrder
    estado?: SortOrder
    fecha_ingreso?: SortOrder
    ID_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    ID_usuario?: SortOrder
    ID_area?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    ID_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    estado?: SortOrder
    fecha_ingreso?: SortOrder
    ID_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    ID_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    estado?: SortOrder
    fecha_ingreso?: SortOrder
    ID_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    ID_usuario?: SortOrder
    ID_area?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type Estado_documentoScalarRelationFilter = {
    is?: Estado_documentoWhereInput
    isNot?: Estado_documentoWhereInput
  }

  export type ProyectoScalarRelationFilter = {
    is?: ProyectoWhereInput
    isNot?: ProyectoWhereInput
  }

  export type DocumentoCountOrderByAggregateInput = {
    ID_documento?: SortOrder
    nombre_documento?: SortOrder
    tipo_documento?: SortOrder
    archivo?: SortOrder
    descripcion?: SortOrder
    folio?: SortOrder
    ID_cliente?: SortOrder
    ID_proyecto?: SortOrder
    ID_estado_documento?: SortOrder
    ID_area?: SortOrder
    ID_usuario?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type DocumentoAvgOrderByAggregateInput = {
    ID_documento?: SortOrder
    ID_cliente?: SortOrder
    ID_proyecto?: SortOrder
    ID_estado_documento?: SortOrder
    ID_area?: SortOrder
    ID_usuario?: SortOrder
  }

  export type DocumentoMaxOrderByAggregateInput = {
    ID_documento?: SortOrder
    nombre_documento?: SortOrder
    tipo_documento?: SortOrder
    archivo?: SortOrder
    descripcion?: SortOrder
    folio?: SortOrder
    ID_cliente?: SortOrder
    ID_proyecto?: SortOrder
    ID_estado_documento?: SortOrder
    ID_area?: SortOrder
    ID_usuario?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type DocumentoMinOrderByAggregateInput = {
    ID_documento?: SortOrder
    nombre_documento?: SortOrder
    tipo_documento?: SortOrder
    archivo?: SortOrder
    descripcion?: SortOrder
    folio?: SortOrder
    ID_cliente?: SortOrder
    ID_proyecto?: SortOrder
    ID_estado_documento?: SortOrder
    ID_area?: SortOrder
    ID_usuario?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type DocumentoSumOrderByAggregateInput = {
    ID_documento?: SortOrder
    ID_cliente?: SortOrder
    ID_proyecto?: SortOrder
    ID_estado_documento?: SortOrder
    ID_area?: SortOrder
    ID_usuario?: SortOrder
  }

  export type DocumentoScalarRelationFilter = {
    is?: DocumentoWhereInput
    isNot?: DocumentoWhereInput
  }

  export type Historial_documentosCountOrderByAggregateInput = {
    ID_historial?: SortOrder
    fecha?: SortOrder
    ID_documento?: SortOrder
    ID_usuario?: SortOrder
    ID_estado_documento?: SortOrder
    documento_historial?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type Historial_documentosAvgOrderByAggregateInput = {
    ID_historial?: SortOrder
    ID_documento?: SortOrder
    ID_usuario?: SortOrder
    ID_estado_documento?: SortOrder
  }

  export type Historial_documentosMaxOrderByAggregateInput = {
    ID_historial?: SortOrder
    fecha?: SortOrder
    ID_documento?: SortOrder
    ID_usuario?: SortOrder
    ID_estado_documento?: SortOrder
    documento_historial?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type Historial_documentosMinOrderByAggregateInput = {
    ID_historial?: SortOrder
    fecha?: SortOrder
    ID_documento?: SortOrder
    ID_usuario?: SortOrder
    ID_estado_documento?: SortOrder
    documento_historial?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type Historial_documentosSumOrderByAggregateInput = {
    ID_historial?: SortOrder
    ID_documento?: SortOrder
    ID_usuario?: SortOrder
    ID_estado_documento?: SortOrder
  }

  export type DocumentoCreateNestedManyWithoutClienteInput = {
    create?: XOR<DocumentoCreateWithoutClienteInput, DocumentoUncheckedCreateWithoutClienteInput> | DocumentoCreateWithoutClienteInput[] | DocumentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutClienteInput | DocumentoCreateOrConnectWithoutClienteInput[]
    createMany?: DocumentoCreateManyClienteInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type DocumentoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<DocumentoCreateWithoutClienteInput, DocumentoUncheckedCreateWithoutClienteInput> | DocumentoCreateWithoutClienteInput[] | DocumentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutClienteInput | DocumentoCreateOrConnectWithoutClienteInput[]
    createMany?: DocumentoCreateManyClienteInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DocumentoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<DocumentoCreateWithoutClienteInput, DocumentoUncheckedCreateWithoutClienteInput> | DocumentoCreateWithoutClienteInput[] | DocumentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutClienteInput | DocumentoCreateOrConnectWithoutClienteInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutClienteInput | DocumentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: DocumentoCreateManyClienteInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutClienteInput | DocumentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutClienteInput | DocumentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DocumentoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<DocumentoCreateWithoutClienteInput, DocumentoUncheckedCreateWithoutClienteInput> | DocumentoCreateWithoutClienteInput[] | DocumentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutClienteInput | DocumentoCreateOrConnectWithoutClienteInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutClienteInput | DocumentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: DocumentoCreateManyClienteInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutClienteInput | DocumentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutClienteInput | DocumentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type DocumentoCreateNestedManyWithoutProyectoInput = {
    create?: XOR<DocumentoCreateWithoutProyectoInput, DocumentoUncheckedCreateWithoutProyectoInput> | DocumentoCreateWithoutProyectoInput[] | DocumentoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutProyectoInput | DocumentoCreateOrConnectWithoutProyectoInput[]
    createMany?: DocumentoCreateManyProyectoInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type DocumentoUncheckedCreateNestedManyWithoutProyectoInput = {
    create?: XOR<DocumentoCreateWithoutProyectoInput, DocumentoUncheckedCreateWithoutProyectoInput> | DocumentoCreateWithoutProyectoInput[] | DocumentoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutProyectoInput | DocumentoCreateOrConnectWithoutProyectoInput[]
    createMany?: DocumentoCreateManyProyectoInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type DocumentoUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<DocumentoCreateWithoutProyectoInput, DocumentoUncheckedCreateWithoutProyectoInput> | DocumentoCreateWithoutProyectoInput[] | DocumentoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutProyectoInput | DocumentoCreateOrConnectWithoutProyectoInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutProyectoInput | DocumentoUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: DocumentoCreateManyProyectoInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutProyectoInput | DocumentoUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutProyectoInput | DocumentoUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type DocumentoUncheckedUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<DocumentoCreateWithoutProyectoInput, DocumentoUncheckedCreateWithoutProyectoInput> | DocumentoCreateWithoutProyectoInput[] | DocumentoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutProyectoInput | DocumentoCreateOrConnectWithoutProyectoInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutProyectoInput | DocumentoUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: DocumentoCreateManyProyectoInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutProyectoInput | DocumentoUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutProyectoInput | DocumentoUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type DocumentoCreateNestedManyWithoutEstadoInput = {
    create?: XOR<DocumentoCreateWithoutEstadoInput, DocumentoUncheckedCreateWithoutEstadoInput> | DocumentoCreateWithoutEstadoInput[] | DocumentoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutEstadoInput | DocumentoCreateOrConnectWithoutEstadoInput[]
    createMany?: DocumentoCreateManyEstadoInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type Historial_documentosCreateNestedManyWithoutEstadoInput = {
    create?: XOR<Historial_documentosCreateWithoutEstadoInput, Historial_documentosUncheckedCreateWithoutEstadoInput> | Historial_documentosCreateWithoutEstadoInput[] | Historial_documentosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: Historial_documentosCreateOrConnectWithoutEstadoInput | Historial_documentosCreateOrConnectWithoutEstadoInput[]
    createMany?: Historial_documentosCreateManyEstadoInputEnvelope
    connect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
  }

  export type DocumentoUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<DocumentoCreateWithoutEstadoInput, DocumentoUncheckedCreateWithoutEstadoInput> | DocumentoCreateWithoutEstadoInput[] | DocumentoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutEstadoInput | DocumentoCreateOrConnectWithoutEstadoInput[]
    createMany?: DocumentoCreateManyEstadoInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type Historial_documentosUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<Historial_documentosCreateWithoutEstadoInput, Historial_documentosUncheckedCreateWithoutEstadoInput> | Historial_documentosCreateWithoutEstadoInput[] | Historial_documentosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: Historial_documentosCreateOrConnectWithoutEstadoInput | Historial_documentosCreateOrConnectWithoutEstadoInput[]
    createMany?: Historial_documentosCreateManyEstadoInputEnvelope
    connect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
  }

  export type DocumentoUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<DocumentoCreateWithoutEstadoInput, DocumentoUncheckedCreateWithoutEstadoInput> | DocumentoCreateWithoutEstadoInput[] | DocumentoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutEstadoInput | DocumentoCreateOrConnectWithoutEstadoInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutEstadoInput | DocumentoUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: DocumentoCreateManyEstadoInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutEstadoInput | DocumentoUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutEstadoInput | DocumentoUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type Historial_documentosUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<Historial_documentosCreateWithoutEstadoInput, Historial_documentosUncheckedCreateWithoutEstadoInput> | Historial_documentosCreateWithoutEstadoInput[] | Historial_documentosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: Historial_documentosCreateOrConnectWithoutEstadoInput | Historial_documentosCreateOrConnectWithoutEstadoInput[]
    upsert?: Historial_documentosUpsertWithWhereUniqueWithoutEstadoInput | Historial_documentosUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: Historial_documentosCreateManyEstadoInputEnvelope
    set?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    disconnect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    delete?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    connect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    update?: Historial_documentosUpdateWithWhereUniqueWithoutEstadoInput | Historial_documentosUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: Historial_documentosUpdateManyWithWhereWithoutEstadoInput | Historial_documentosUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: Historial_documentosScalarWhereInput | Historial_documentosScalarWhereInput[]
  }

  export type DocumentoUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<DocumentoCreateWithoutEstadoInput, DocumentoUncheckedCreateWithoutEstadoInput> | DocumentoCreateWithoutEstadoInput[] | DocumentoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutEstadoInput | DocumentoCreateOrConnectWithoutEstadoInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutEstadoInput | DocumentoUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: DocumentoCreateManyEstadoInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutEstadoInput | DocumentoUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutEstadoInput | DocumentoUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type Historial_documentosUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<Historial_documentosCreateWithoutEstadoInput, Historial_documentosUncheckedCreateWithoutEstadoInput> | Historial_documentosCreateWithoutEstadoInput[] | Historial_documentosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: Historial_documentosCreateOrConnectWithoutEstadoInput | Historial_documentosCreateOrConnectWithoutEstadoInput[]
    upsert?: Historial_documentosUpsertWithWhereUniqueWithoutEstadoInput | Historial_documentosUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: Historial_documentosCreateManyEstadoInputEnvelope
    set?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    disconnect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    delete?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    connect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    update?: Historial_documentosUpdateWithWhereUniqueWithoutEstadoInput | Historial_documentosUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: Historial_documentosUpdateManyWithWhereWithoutEstadoInput | Historial_documentosUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: Historial_documentosScalarWhereInput | Historial_documentosScalarWhereInput[]
  }

  export type DocumentoCreateNestedManyWithoutAreaInput = {
    create?: XOR<DocumentoCreateWithoutAreaInput, DocumentoUncheckedCreateWithoutAreaInput> | DocumentoCreateWithoutAreaInput[] | DocumentoUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutAreaInput | DocumentoCreateOrConnectWithoutAreaInput[]
    createMany?: DocumentoCreateManyAreaInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutAreaInput = {
    create?: XOR<UsuarioCreateWithoutAreaInput, UsuarioUncheckedCreateWithoutAreaInput> | UsuarioCreateWithoutAreaInput[] | UsuarioUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutAreaInput | UsuarioCreateOrConnectWithoutAreaInput[]
    createMany?: UsuarioCreateManyAreaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type DocumentoUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<DocumentoCreateWithoutAreaInput, DocumentoUncheckedCreateWithoutAreaInput> | DocumentoCreateWithoutAreaInput[] | DocumentoUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutAreaInput | DocumentoCreateOrConnectWithoutAreaInput[]
    createMany?: DocumentoCreateManyAreaInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<UsuarioCreateWithoutAreaInput, UsuarioUncheckedCreateWithoutAreaInput> | UsuarioCreateWithoutAreaInput[] | UsuarioUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutAreaInput | UsuarioCreateOrConnectWithoutAreaInput[]
    createMany?: UsuarioCreateManyAreaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type DocumentoUpdateManyWithoutAreaNestedInput = {
    create?: XOR<DocumentoCreateWithoutAreaInput, DocumentoUncheckedCreateWithoutAreaInput> | DocumentoCreateWithoutAreaInput[] | DocumentoUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutAreaInput | DocumentoCreateOrConnectWithoutAreaInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutAreaInput | DocumentoUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: DocumentoCreateManyAreaInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutAreaInput | DocumentoUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutAreaInput | DocumentoUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutAreaNestedInput = {
    create?: XOR<UsuarioCreateWithoutAreaInput, UsuarioUncheckedCreateWithoutAreaInput> | UsuarioCreateWithoutAreaInput[] | UsuarioUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutAreaInput | UsuarioCreateOrConnectWithoutAreaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutAreaInput | UsuarioUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: UsuarioCreateManyAreaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutAreaInput | UsuarioUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutAreaInput | UsuarioUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type DocumentoUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<DocumentoCreateWithoutAreaInput, DocumentoUncheckedCreateWithoutAreaInput> | DocumentoCreateWithoutAreaInput[] | DocumentoUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutAreaInput | DocumentoCreateOrConnectWithoutAreaInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutAreaInput | DocumentoUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: DocumentoCreateManyAreaInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutAreaInput | DocumentoUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutAreaInput | DocumentoUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<UsuarioCreateWithoutAreaInput, UsuarioUncheckedCreateWithoutAreaInput> | UsuarioCreateWithoutAreaInput[] | UsuarioUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutAreaInput | UsuarioCreateOrConnectWithoutAreaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutAreaInput | UsuarioUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: UsuarioCreateManyAreaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutAreaInput | UsuarioUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutAreaInput | UsuarioUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioCreatepermisosInput = {
    set: string[]
  }

  export type DocumentoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DocumentoCreateWithoutUsuarioInput, DocumentoUncheckedCreateWithoutUsuarioInput> | DocumentoCreateWithoutUsuarioInput[] | DocumentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutUsuarioInput | DocumentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: DocumentoCreateManyUsuarioInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type Historial_documentosCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Historial_documentosCreateWithoutUsuarioInput, Historial_documentosUncheckedCreateWithoutUsuarioInput> | Historial_documentosCreateWithoutUsuarioInput[] | Historial_documentosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Historial_documentosCreateOrConnectWithoutUsuarioInput | Historial_documentosCreateOrConnectWithoutUsuarioInput[]
    createMany?: Historial_documentosCreateManyUsuarioInputEnvelope
    connect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
  }

  export type AreaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<AreaCreateWithoutUsuariosInput, AreaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: AreaCreateOrConnectWithoutUsuariosInput
    connect?: AreaWhereUniqueInput
  }

  export type DocumentoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DocumentoCreateWithoutUsuarioInput, DocumentoUncheckedCreateWithoutUsuarioInput> | DocumentoCreateWithoutUsuarioInput[] | DocumentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutUsuarioInput | DocumentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: DocumentoCreateManyUsuarioInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type Historial_documentosUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Historial_documentosCreateWithoutUsuarioInput, Historial_documentosUncheckedCreateWithoutUsuarioInput> | Historial_documentosCreateWithoutUsuarioInput[] | Historial_documentosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Historial_documentosCreateOrConnectWithoutUsuarioInput | Historial_documentosCreateOrConnectWithoutUsuarioInput[]
    createMany?: Historial_documentosCreateManyUsuarioInputEnvelope
    connect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
  }

  export type UsuarioUpdatepermisosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DocumentoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DocumentoCreateWithoutUsuarioInput, DocumentoUncheckedCreateWithoutUsuarioInput> | DocumentoCreateWithoutUsuarioInput[] | DocumentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutUsuarioInput | DocumentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutUsuarioInput | DocumentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DocumentoCreateManyUsuarioInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutUsuarioInput | DocumentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutUsuarioInput | DocumentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type Historial_documentosUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<Historial_documentosCreateWithoutUsuarioInput, Historial_documentosUncheckedCreateWithoutUsuarioInput> | Historial_documentosCreateWithoutUsuarioInput[] | Historial_documentosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Historial_documentosCreateOrConnectWithoutUsuarioInput | Historial_documentosCreateOrConnectWithoutUsuarioInput[]
    upsert?: Historial_documentosUpsertWithWhereUniqueWithoutUsuarioInput | Historial_documentosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: Historial_documentosCreateManyUsuarioInputEnvelope
    set?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    disconnect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    delete?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    connect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    update?: Historial_documentosUpdateWithWhereUniqueWithoutUsuarioInput | Historial_documentosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: Historial_documentosUpdateManyWithWhereWithoutUsuarioInput | Historial_documentosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: Historial_documentosScalarWhereInput | Historial_documentosScalarWhereInput[]
  }

  export type AreaUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<AreaCreateWithoutUsuariosInput, AreaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: AreaCreateOrConnectWithoutUsuariosInput
    upsert?: AreaUpsertWithoutUsuariosInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutUsuariosInput, AreaUpdateWithoutUsuariosInput>, AreaUncheckedUpdateWithoutUsuariosInput>
  }

  export type DocumentoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DocumentoCreateWithoutUsuarioInput, DocumentoUncheckedCreateWithoutUsuarioInput> | DocumentoCreateWithoutUsuarioInput[] | DocumentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutUsuarioInput | DocumentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutUsuarioInput | DocumentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DocumentoCreateManyUsuarioInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutUsuarioInput | DocumentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutUsuarioInput | DocumentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type Historial_documentosUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<Historial_documentosCreateWithoutUsuarioInput, Historial_documentosUncheckedCreateWithoutUsuarioInput> | Historial_documentosCreateWithoutUsuarioInput[] | Historial_documentosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Historial_documentosCreateOrConnectWithoutUsuarioInput | Historial_documentosCreateOrConnectWithoutUsuarioInput[]
    upsert?: Historial_documentosUpsertWithWhereUniqueWithoutUsuarioInput | Historial_documentosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: Historial_documentosCreateManyUsuarioInputEnvelope
    set?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    disconnect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    delete?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    connect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    update?: Historial_documentosUpdateWithWhereUniqueWithoutUsuarioInput | Historial_documentosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: Historial_documentosUpdateManyWithWhereWithoutUsuarioInput | Historial_documentosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: Historial_documentosScalarWhereInput | Historial_documentosScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<UsuarioCreateWithoutDocumentosInput, UsuarioUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDocumentosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AreaCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<AreaCreateWithoutDocumentosInput, AreaUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: AreaCreateOrConnectWithoutDocumentosInput
    connect?: AreaWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<ClienteCreateWithoutDocumentosInput, ClienteUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutDocumentosInput
    connect?: ClienteWhereUniqueInput
  }

  export type Estado_documentoCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<Estado_documentoCreateWithoutDocumentosInput, Estado_documentoUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: Estado_documentoCreateOrConnectWithoutDocumentosInput
    connect?: Estado_documentoWhereUniqueInput
  }

  export type ProyectoCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<ProyectoCreateWithoutDocumentosInput, ProyectoUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: ProyectoCreateOrConnectWithoutDocumentosInput
    connect?: ProyectoWhereUniqueInput
  }

  export type Historial_documentosCreateNestedManyWithoutDocumentoInput = {
    create?: XOR<Historial_documentosCreateWithoutDocumentoInput, Historial_documentosUncheckedCreateWithoutDocumentoInput> | Historial_documentosCreateWithoutDocumentoInput[] | Historial_documentosUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: Historial_documentosCreateOrConnectWithoutDocumentoInput | Historial_documentosCreateOrConnectWithoutDocumentoInput[]
    createMany?: Historial_documentosCreateManyDocumentoInputEnvelope
    connect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
  }

  export type Historial_documentosUncheckedCreateNestedManyWithoutDocumentoInput = {
    create?: XOR<Historial_documentosCreateWithoutDocumentoInput, Historial_documentosUncheckedCreateWithoutDocumentoInput> | Historial_documentosCreateWithoutDocumentoInput[] | Historial_documentosUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: Historial_documentosCreateOrConnectWithoutDocumentoInput | Historial_documentosCreateOrConnectWithoutDocumentoInput[]
    createMany?: Historial_documentosCreateManyDocumentoInputEnvelope
    connect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutDocumentosNestedInput = {
    create?: XOR<UsuarioCreateWithoutDocumentosInput, UsuarioUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDocumentosInput
    upsert?: UsuarioUpsertWithoutDocumentosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDocumentosInput, UsuarioUpdateWithoutDocumentosInput>, UsuarioUncheckedUpdateWithoutDocumentosInput>
  }

  export type AreaUpdateOneRequiredWithoutDocumentosNestedInput = {
    create?: XOR<AreaCreateWithoutDocumentosInput, AreaUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: AreaCreateOrConnectWithoutDocumentosInput
    upsert?: AreaUpsertWithoutDocumentosInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutDocumentosInput, AreaUpdateWithoutDocumentosInput>, AreaUncheckedUpdateWithoutDocumentosInput>
  }

  export type ClienteUpdateOneRequiredWithoutDocumentosNestedInput = {
    create?: XOR<ClienteCreateWithoutDocumentosInput, ClienteUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutDocumentosInput
    upsert?: ClienteUpsertWithoutDocumentosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutDocumentosInput, ClienteUpdateWithoutDocumentosInput>, ClienteUncheckedUpdateWithoutDocumentosInput>
  }

  export type Estado_documentoUpdateOneRequiredWithoutDocumentosNestedInput = {
    create?: XOR<Estado_documentoCreateWithoutDocumentosInput, Estado_documentoUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: Estado_documentoCreateOrConnectWithoutDocumentosInput
    upsert?: Estado_documentoUpsertWithoutDocumentosInput
    connect?: Estado_documentoWhereUniqueInput
    update?: XOR<XOR<Estado_documentoUpdateToOneWithWhereWithoutDocumentosInput, Estado_documentoUpdateWithoutDocumentosInput>, Estado_documentoUncheckedUpdateWithoutDocumentosInput>
  }

  export type ProyectoUpdateOneRequiredWithoutDocumentosNestedInput = {
    create?: XOR<ProyectoCreateWithoutDocumentosInput, ProyectoUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: ProyectoCreateOrConnectWithoutDocumentosInput
    upsert?: ProyectoUpsertWithoutDocumentosInput
    connect?: ProyectoWhereUniqueInput
    update?: XOR<XOR<ProyectoUpdateToOneWithWhereWithoutDocumentosInput, ProyectoUpdateWithoutDocumentosInput>, ProyectoUncheckedUpdateWithoutDocumentosInput>
  }

  export type Historial_documentosUpdateManyWithoutDocumentoNestedInput = {
    create?: XOR<Historial_documentosCreateWithoutDocumentoInput, Historial_documentosUncheckedCreateWithoutDocumentoInput> | Historial_documentosCreateWithoutDocumentoInput[] | Historial_documentosUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: Historial_documentosCreateOrConnectWithoutDocumentoInput | Historial_documentosCreateOrConnectWithoutDocumentoInput[]
    upsert?: Historial_documentosUpsertWithWhereUniqueWithoutDocumentoInput | Historial_documentosUpsertWithWhereUniqueWithoutDocumentoInput[]
    createMany?: Historial_documentosCreateManyDocumentoInputEnvelope
    set?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    disconnect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    delete?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    connect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    update?: Historial_documentosUpdateWithWhereUniqueWithoutDocumentoInput | Historial_documentosUpdateWithWhereUniqueWithoutDocumentoInput[]
    updateMany?: Historial_documentosUpdateManyWithWhereWithoutDocumentoInput | Historial_documentosUpdateManyWithWhereWithoutDocumentoInput[]
    deleteMany?: Historial_documentosScalarWhereInput | Historial_documentosScalarWhereInput[]
  }

  export type Historial_documentosUncheckedUpdateManyWithoutDocumentoNestedInput = {
    create?: XOR<Historial_documentosCreateWithoutDocumentoInput, Historial_documentosUncheckedCreateWithoutDocumentoInput> | Historial_documentosCreateWithoutDocumentoInput[] | Historial_documentosUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: Historial_documentosCreateOrConnectWithoutDocumentoInput | Historial_documentosCreateOrConnectWithoutDocumentoInput[]
    upsert?: Historial_documentosUpsertWithWhereUniqueWithoutDocumentoInput | Historial_documentosUpsertWithWhereUniqueWithoutDocumentoInput[]
    createMany?: Historial_documentosCreateManyDocumentoInputEnvelope
    set?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    disconnect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    delete?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    connect?: Historial_documentosWhereUniqueInput | Historial_documentosWhereUniqueInput[]
    update?: Historial_documentosUpdateWithWhereUniqueWithoutDocumentoInput | Historial_documentosUpdateWithWhereUniqueWithoutDocumentoInput[]
    updateMany?: Historial_documentosUpdateManyWithWhereWithoutDocumentoInput | Historial_documentosUpdateManyWithWhereWithoutDocumentoInput[]
    deleteMany?: Historial_documentosScalarWhereInput | Historial_documentosScalarWhereInput[]
  }

  export type DocumentoCreateNestedOneWithoutHistorialesInput = {
    create?: XOR<DocumentoCreateWithoutHistorialesInput, DocumentoUncheckedCreateWithoutHistorialesInput>
    connectOrCreate?: DocumentoCreateOrConnectWithoutHistorialesInput
    connect?: DocumentoWhereUniqueInput
  }

  export type Estado_documentoCreateNestedOneWithoutHistorialesInput = {
    create?: XOR<Estado_documentoCreateWithoutHistorialesInput, Estado_documentoUncheckedCreateWithoutHistorialesInput>
    connectOrCreate?: Estado_documentoCreateOrConnectWithoutHistorialesInput
    connect?: Estado_documentoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutHistorialesInput = {
    create?: XOR<UsuarioCreateWithoutHistorialesInput, UsuarioUncheckedCreateWithoutHistorialesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistorialesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DocumentoUpdateOneRequiredWithoutHistorialesNestedInput = {
    create?: XOR<DocumentoCreateWithoutHistorialesInput, DocumentoUncheckedCreateWithoutHistorialesInput>
    connectOrCreate?: DocumentoCreateOrConnectWithoutHistorialesInput
    upsert?: DocumentoUpsertWithoutHistorialesInput
    connect?: DocumentoWhereUniqueInput
    update?: XOR<XOR<DocumentoUpdateToOneWithWhereWithoutHistorialesInput, DocumentoUpdateWithoutHistorialesInput>, DocumentoUncheckedUpdateWithoutHistorialesInput>
  }

  export type Estado_documentoUpdateOneRequiredWithoutHistorialesNestedInput = {
    create?: XOR<Estado_documentoCreateWithoutHistorialesInput, Estado_documentoUncheckedCreateWithoutHistorialesInput>
    connectOrCreate?: Estado_documentoCreateOrConnectWithoutHistorialesInput
    upsert?: Estado_documentoUpsertWithoutHistorialesInput
    connect?: Estado_documentoWhereUniqueInput
    update?: XOR<XOR<Estado_documentoUpdateToOneWithWhereWithoutHistorialesInput, Estado_documentoUpdateWithoutHistorialesInput>, Estado_documentoUncheckedUpdateWithoutHistorialesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutHistorialesNestedInput = {
    create?: XOR<UsuarioCreateWithoutHistorialesInput, UsuarioUncheckedCreateWithoutHistorialesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistorialesInput
    upsert?: UsuarioUpsertWithoutHistorialesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutHistorialesInput, UsuarioUpdateWithoutHistorialesInput>, UsuarioUncheckedUpdateWithoutHistorialesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DocumentoCreateWithoutClienteInput = {
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutDocumentosInput
    area: AreaCreateNestedOneWithoutDocumentosInput
    estado: Estado_documentoCreateNestedOneWithoutDocumentosInput
    proyecto: ProyectoCreateNestedOneWithoutDocumentosInput
    historiales?: Historial_documentosCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoUncheckedCreateWithoutClienteInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_proyecto: number
    ID_estado_documento: number
    ID_area: number
    ID_usuario: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    historiales?: Historial_documentosUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoCreateOrConnectWithoutClienteInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutClienteInput, DocumentoUncheckedCreateWithoutClienteInput>
  }

  export type DocumentoCreateManyClienteInputEnvelope = {
    data: DocumentoCreateManyClienteInput | DocumentoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type DocumentoUpsertWithWhereUniqueWithoutClienteInput = {
    where: DocumentoWhereUniqueInput
    update: XOR<DocumentoUpdateWithoutClienteInput, DocumentoUncheckedUpdateWithoutClienteInput>
    create: XOR<DocumentoCreateWithoutClienteInput, DocumentoUncheckedCreateWithoutClienteInput>
  }

  export type DocumentoUpdateWithWhereUniqueWithoutClienteInput = {
    where: DocumentoWhereUniqueInput
    data: XOR<DocumentoUpdateWithoutClienteInput, DocumentoUncheckedUpdateWithoutClienteInput>
  }

  export type DocumentoUpdateManyWithWhereWithoutClienteInput = {
    where: DocumentoScalarWhereInput
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyWithoutClienteInput>
  }

  export type DocumentoScalarWhereInput = {
    AND?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
    OR?: DocumentoScalarWhereInput[]
    NOT?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
    ID_documento?: IntFilter<"Documento"> | number
    nombre_documento?: StringFilter<"Documento"> | string
    tipo_documento?: StringFilter<"Documento"> | string
    archivo?: StringFilter<"Documento"> | string
    descripcion?: StringFilter<"Documento"> | string
    folio?: StringFilter<"Documento"> | string
    ID_cliente?: IntFilter<"Documento"> | number
    ID_proyecto?: IntFilter<"Documento"> | number
    ID_estado_documento?: IntFilter<"Documento"> | number
    ID_area?: IntFilter<"Documento"> | number
    ID_usuario?: IntFilter<"Documento"> | number
    created_at?: DateTimeFilter<"Documento"> | Date | string
    updated_at?: DateTimeFilter<"Documento"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Documento"> | Date | string | null
  }

  export type DocumentoCreateWithoutProyectoInput = {
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutDocumentosInput
    area: AreaCreateNestedOneWithoutDocumentosInput
    cliente: ClienteCreateNestedOneWithoutDocumentosInput
    estado: Estado_documentoCreateNestedOneWithoutDocumentosInput
    historiales?: Historial_documentosCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoUncheckedCreateWithoutProyectoInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_cliente: number
    ID_estado_documento: number
    ID_area: number
    ID_usuario: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    historiales?: Historial_documentosUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoCreateOrConnectWithoutProyectoInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutProyectoInput, DocumentoUncheckedCreateWithoutProyectoInput>
  }

  export type DocumentoCreateManyProyectoInputEnvelope = {
    data: DocumentoCreateManyProyectoInput | DocumentoCreateManyProyectoInput[]
    skipDuplicates?: boolean
  }

  export type DocumentoUpsertWithWhereUniqueWithoutProyectoInput = {
    where: DocumentoWhereUniqueInput
    update: XOR<DocumentoUpdateWithoutProyectoInput, DocumentoUncheckedUpdateWithoutProyectoInput>
    create: XOR<DocumentoCreateWithoutProyectoInput, DocumentoUncheckedCreateWithoutProyectoInput>
  }

  export type DocumentoUpdateWithWhereUniqueWithoutProyectoInput = {
    where: DocumentoWhereUniqueInput
    data: XOR<DocumentoUpdateWithoutProyectoInput, DocumentoUncheckedUpdateWithoutProyectoInput>
  }

  export type DocumentoUpdateManyWithWhereWithoutProyectoInput = {
    where: DocumentoScalarWhereInput
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyWithoutProyectoInput>
  }

  export type DocumentoCreateWithoutEstadoInput = {
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutDocumentosInput
    area: AreaCreateNestedOneWithoutDocumentosInput
    cliente: ClienteCreateNestedOneWithoutDocumentosInput
    proyecto: ProyectoCreateNestedOneWithoutDocumentosInput
    historiales?: Historial_documentosCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoUncheckedCreateWithoutEstadoInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_cliente: number
    ID_proyecto: number
    ID_area: number
    ID_usuario: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    historiales?: Historial_documentosUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoCreateOrConnectWithoutEstadoInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutEstadoInput, DocumentoUncheckedCreateWithoutEstadoInput>
  }

  export type DocumentoCreateManyEstadoInputEnvelope = {
    data: DocumentoCreateManyEstadoInput | DocumentoCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type Historial_documentosCreateWithoutEstadoInput = {
    fecha: Date | string
    documento_historial: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documento: DocumentoCreateNestedOneWithoutHistorialesInput
    usuario: UsuarioCreateNestedOneWithoutHistorialesInput
  }

  export type Historial_documentosUncheckedCreateWithoutEstadoInput = {
    ID_historial?: number
    fecha: Date | string
    ID_documento: number
    ID_usuario: number
    documento_historial: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type Historial_documentosCreateOrConnectWithoutEstadoInput = {
    where: Historial_documentosWhereUniqueInput
    create: XOR<Historial_documentosCreateWithoutEstadoInput, Historial_documentosUncheckedCreateWithoutEstadoInput>
  }

  export type Historial_documentosCreateManyEstadoInputEnvelope = {
    data: Historial_documentosCreateManyEstadoInput | Historial_documentosCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type DocumentoUpsertWithWhereUniqueWithoutEstadoInput = {
    where: DocumentoWhereUniqueInput
    update: XOR<DocumentoUpdateWithoutEstadoInput, DocumentoUncheckedUpdateWithoutEstadoInput>
    create: XOR<DocumentoCreateWithoutEstadoInput, DocumentoUncheckedCreateWithoutEstadoInput>
  }

  export type DocumentoUpdateWithWhereUniqueWithoutEstadoInput = {
    where: DocumentoWhereUniqueInput
    data: XOR<DocumentoUpdateWithoutEstadoInput, DocumentoUncheckedUpdateWithoutEstadoInput>
  }

  export type DocumentoUpdateManyWithWhereWithoutEstadoInput = {
    where: DocumentoScalarWhereInput
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyWithoutEstadoInput>
  }

  export type Historial_documentosUpsertWithWhereUniqueWithoutEstadoInput = {
    where: Historial_documentosWhereUniqueInput
    update: XOR<Historial_documentosUpdateWithoutEstadoInput, Historial_documentosUncheckedUpdateWithoutEstadoInput>
    create: XOR<Historial_documentosCreateWithoutEstadoInput, Historial_documentosUncheckedCreateWithoutEstadoInput>
  }

  export type Historial_documentosUpdateWithWhereUniqueWithoutEstadoInput = {
    where: Historial_documentosWhereUniqueInput
    data: XOR<Historial_documentosUpdateWithoutEstadoInput, Historial_documentosUncheckedUpdateWithoutEstadoInput>
  }

  export type Historial_documentosUpdateManyWithWhereWithoutEstadoInput = {
    where: Historial_documentosScalarWhereInput
    data: XOR<Historial_documentosUpdateManyMutationInput, Historial_documentosUncheckedUpdateManyWithoutEstadoInput>
  }

  export type Historial_documentosScalarWhereInput = {
    AND?: Historial_documentosScalarWhereInput | Historial_documentosScalarWhereInput[]
    OR?: Historial_documentosScalarWhereInput[]
    NOT?: Historial_documentosScalarWhereInput | Historial_documentosScalarWhereInput[]
    ID_historial?: IntFilter<"Historial_documentos"> | number
    fecha?: DateTimeFilter<"Historial_documentos"> | Date | string
    ID_documento?: IntFilter<"Historial_documentos"> | number
    ID_usuario?: IntFilter<"Historial_documentos"> | number
    ID_estado_documento?: IntFilter<"Historial_documentos"> | number
    documento_historial?: StringFilter<"Historial_documentos"> | string
    descripcion?: StringFilter<"Historial_documentos"> | string
    created_at?: DateTimeFilter<"Historial_documentos"> | Date | string
    updated_at?: DateTimeFilter<"Historial_documentos"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Historial_documentos"> | Date | string | null
  }

  export type DocumentoCreateWithoutAreaInput = {
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutDocumentosInput
    cliente: ClienteCreateNestedOneWithoutDocumentosInput
    estado: Estado_documentoCreateNestedOneWithoutDocumentosInput
    proyecto: ProyectoCreateNestedOneWithoutDocumentosInput
    historiales?: Historial_documentosCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoUncheckedCreateWithoutAreaInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_cliente: number
    ID_proyecto: number
    ID_estado_documento: number
    ID_usuario: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    historiales?: Historial_documentosUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoCreateOrConnectWithoutAreaInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutAreaInput, DocumentoUncheckedCreateWithoutAreaInput>
  }

  export type DocumentoCreateManyAreaInputEnvelope = {
    data: DocumentoCreateManyAreaInput | DocumentoCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutAreaInput = {
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    rol: string
    permisos?: UsuarioCreatepermisosInput | string[]
    estado?: string
    fecha_ingreso?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoCreateNestedManyWithoutUsuarioInput
    historiales?: Historial_documentosCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAreaInput = {
    ID_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    rol: string
    permisos?: UsuarioCreatepermisosInput | string[]
    estado?: string
    fecha_ingreso?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoUncheckedCreateNestedManyWithoutUsuarioInput
    historiales?: Historial_documentosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAreaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAreaInput, UsuarioUncheckedCreateWithoutAreaInput>
  }

  export type UsuarioCreateManyAreaInputEnvelope = {
    data: UsuarioCreateManyAreaInput | UsuarioCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type DocumentoUpsertWithWhereUniqueWithoutAreaInput = {
    where: DocumentoWhereUniqueInput
    update: XOR<DocumentoUpdateWithoutAreaInput, DocumentoUncheckedUpdateWithoutAreaInput>
    create: XOR<DocumentoCreateWithoutAreaInput, DocumentoUncheckedCreateWithoutAreaInput>
  }

  export type DocumentoUpdateWithWhereUniqueWithoutAreaInput = {
    where: DocumentoWhereUniqueInput
    data: XOR<DocumentoUpdateWithoutAreaInput, DocumentoUncheckedUpdateWithoutAreaInput>
  }

  export type DocumentoUpdateManyWithWhereWithoutAreaInput = {
    where: DocumentoScalarWhereInput
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyWithoutAreaInput>
  }

  export type UsuarioUpsertWithWhereUniqueWithoutAreaInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutAreaInput, UsuarioUncheckedUpdateWithoutAreaInput>
    create: XOR<UsuarioCreateWithoutAreaInput, UsuarioUncheckedCreateWithoutAreaInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutAreaInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutAreaInput, UsuarioUncheckedUpdateWithoutAreaInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutAreaInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutAreaInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    ID_usuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    permisos?: StringNullableListFilter<"Usuario">
    estado?: StringFilter<"Usuario"> | string
    fecha_ingreso?: DateTimeFilter<"Usuario"> | Date | string
    ID_area?: IntFilter<"Usuario"> | number
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Usuario"> | Date | string | null
  }

  export type DocumentoCreateWithoutUsuarioInput = {
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    area: AreaCreateNestedOneWithoutDocumentosInput
    cliente: ClienteCreateNestedOneWithoutDocumentosInput
    estado: Estado_documentoCreateNestedOneWithoutDocumentosInput
    proyecto: ProyectoCreateNestedOneWithoutDocumentosInput
    historiales?: Historial_documentosCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoUncheckedCreateWithoutUsuarioInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_cliente: number
    ID_proyecto: number
    ID_estado_documento: number
    ID_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    historiales?: Historial_documentosUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoCreateOrConnectWithoutUsuarioInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutUsuarioInput, DocumentoUncheckedCreateWithoutUsuarioInput>
  }

  export type DocumentoCreateManyUsuarioInputEnvelope = {
    data: DocumentoCreateManyUsuarioInput | DocumentoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type Historial_documentosCreateWithoutUsuarioInput = {
    fecha: Date | string
    documento_historial: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documento: DocumentoCreateNestedOneWithoutHistorialesInput
    estado: Estado_documentoCreateNestedOneWithoutHistorialesInput
  }

  export type Historial_documentosUncheckedCreateWithoutUsuarioInput = {
    ID_historial?: number
    fecha: Date | string
    ID_documento: number
    ID_estado_documento: number
    documento_historial: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type Historial_documentosCreateOrConnectWithoutUsuarioInput = {
    where: Historial_documentosWhereUniqueInput
    create: XOR<Historial_documentosCreateWithoutUsuarioInput, Historial_documentosUncheckedCreateWithoutUsuarioInput>
  }

  export type Historial_documentosCreateManyUsuarioInputEnvelope = {
    data: Historial_documentosCreateManyUsuarioInput | Historial_documentosCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AreaCreateWithoutUsuariosInput = {
    nombre: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutUsuariosInput = {
    ID_area?: number
    nombre: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutUsuariosInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutUsuariosInput, AreaUncheckedCreateWithoutUsuariosInput>
  }

  export type DocumentoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DocumentoWhereUniqueInput
    update: XOR<DocumentoUpdateWithoutUsuarioInput, DocumentoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DocumentoCreateWithoutUsuarioInput, DocumentoUncheckedCreateWithoutUsuarioInput>
  }

  export type DocumentoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DocumentoWhereUniqueInput
    data: XOR<DocumentoUpdateWithoutUsuarioInput, DocumentoUncheckedUpdateWithoutUsuarioInput>
  }

  export type DocumentoUpdateManyWithWhereWithoutUsuarioInput = {
    where: DocumentoScalarWhereInput
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type Historial_documentosUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Historial_documentosWhereUniqueInput
    update: XOR<Historial_documentosUpdateWithoutUsuarioInput, Historial_documentosUncheckedUpdateWithoutUsuarioInput>
    create: XOR<Historial_documentosCreateWithoutUsuarioInput, Historial_documentosUncheckedCreateWithoutUsuarioInput>
  }

  export type Historial_documentosUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Historial_documentosWhereUniqueInput
    data: XOR<Historial_documentosUpdateWithoutUsuarioInput, Historial_documentosUncheckedUpdateWithoutUsuarioInput>
  }

  export type Historial_documentosUpdateManyWithWhereWithoutUsuarioInput = {
    where: Historial_documentosScalarWhereInput
    data: XOR<Historial_documentosUpdateManyMutationInput, Historial_documentosUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AreaUpsertWithoutUsuariosInput = {
    update: XOR<AreaUpdateWithoutUsuariosInput, AreaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<AreaCreateWithoutUsuariosInput, AreaUncheckedCreateWithoutUsuariosInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutUsuariosInput, AreaUncheckedUpdateWithoutUsuariosInput>
  }

  export type AreaUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutUsuariosInput = {
    ID_area?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type UsuarioCreateWithoutDocumentosInput = {
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    rol: string
    permisos?: UsuarioCreatepermisosInput | string[]
    estado?: string
    fecha_ingreso?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    historiales?: Historial_documentosCreateNestedManyWithoutUsuarioInput
    area: AreaCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutDocumentosInput = {
    ID_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    rol: string
    permisos?: UsuarioCreatepermisosInput | string[]
    estado?: string
    fecha_ingreso?: Date | string
    ID_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    historiales?: Historial_documentosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutDocumentosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDocumentosInput, UsuarioUncheckedCreateWithoutDocumentosInput>
  }

  export type AreaCreateWithoutDocumentosInput = {
    nombre: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    usuarios?: UsuarioCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutDocumentosInput = {
    ID_area?: number
    nombre: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutDocumentosInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutDocumentosInput, AreaUncheckedCreateWithoutDocumentosInput>
  }

  export type ClienteCreateWithoutDocumentosInput = {
    nombre: string
    apellido: string
    nombre_departamento: string
    nombre_provincia: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ClienteUncheckedCreateWithoutDocumentosInput = {
    ID_cliente?: number
    nombre: string
    apellido: string
    nombre_departamento: string
    nombre_provincia: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ClienteCreateOrConnectWithoutDocumentosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutDocumentosInput, ClienteUncheckedCreateWithoutDocumentosInput>
  }

  export type Estado_documentoCreateWithoutDocumentosInput = {
    estado: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    historiales?: Historial_documentosCreateNestedManyWithoutEstadoInput
  }

  export type Estado_documentoUncheckedCreateWithoutDocumentosInput = {
    ID_estado?: number
    estado: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    historiales?: Historial_documentosUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type Estado_documentoCreateOrConnectWithoutDocumentosInput = {
    where: Estado_documentoWhereUniqueInput
    create: XOR<Estado_documentoCreateWithoutDocumentosInput, Estado_documentoUncheckedCreateWithoutDocumentosInput>
  }

  export type ProyectoCreateWithoutDocumentosInput = {
    nombre: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ProyectoUncheckedCreateWithoutDocumentosInput = {
    ID_proyecto?: number
    nombre: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ProyectoCreateOrConnectWithoutDocumentosInput = {
    where: ProyectoWhereUniqueInput
    create: XOR<ProyectoCreateWithoutDocumentosInput, ProyectoUncheckedCreateWithoutDocumentosInput>
  }

  export type Historial_documentosCreateWithoutDocumentoInput = {
    fecha: Date | string
    documento_historial: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    estado: Estado_documentoCreateNestedOneWithoutHistorialesInput
    usuario: UsuarioCreateNestedOneWithoutHistorialesInput
  }

  export type Historial_documentosUncheckedCreateWithoutDocumentoInput = {
    ID_historial?: number
    fecha: Date | string
    ID_usuario: number
    ID_estado_documento: number
    documento_historial: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type Historial_documentosCreateOrConnectWithoutDocumentoInput = {
    where: Historial_documentosWhereUniqueInput
    create: XOR<Historial_documentosCreateWithoutDocumentoInput, Historial_documentosUncheckedCreateWithoutDocumentoInput>
  }

  export type Historial_documentosCreateManyDocumentoInputEnvelope = {
    data: Historial_documentosCreateManyDocumentoInput | Historial_documentosCreateManyDocumentoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutDocumentosInput = {
    update: XOR<UsuarioUpdateWithoutDocumentosInput, UsuarioUncheckedUpdateWithoutDocumentosInput>
    create: XOR<UsuarioCreateWithoutDocumentosInput, UsuarioUncheckedCreateWithoutDocumentosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDocumentosInput, UsuarioUncheckedUpdateWithoutDocumentosInput>
  }

  export type UsuarioUpdateWithoutDocumentosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: UsuarioUpdatepermisosInput | string[]
    estado?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historiales?: Historial_documentosUpdateManyWithoutUsuarioNestedInput
    area?: AreaUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDocumentosInput = {
    ID_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: UsuarioUpdatepermisosInput | string[]
    estado?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_area?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historiales?: Historial_documentosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AreaUpsertWithoutDocumentosInput = {
    update: XOR<AreaUpdateWithoutDocumentosInput, AreaUncheckedUpdateWithoutDocumentosInput>
    create: XOR<AreaCreateWithoutDocumentosInput, AreaUncheckedCreateWithoutDocumentosInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutDocumentosInput, AreaUncheckedUpdateWithoutDocumentosInput>
  }

  export type AreaUpdateWithoutDocumentosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: UsuarioUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutDocumentosInput = {
    ID_area?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: UsuarioUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type ClienteUpsertWithoutDocumentosInput = {
    update: XOR<ClienteUpdateWithoutDocumentosInput, ClienteUncheckedUpdateWithoutDocumentosInput>
    create: XOR<ClienteCreateWithoutDocumentosInput, ClienteUncheckedCreateWithoutDocumentosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutDocumentosInput, ClienteUncheckedUpdateWithoutDocumentosInput>
  }

  export type ClienteUpdateWithoutDocumentosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_departamento?: StringFieldUpdateOperationsInput | string
    nombre_provincia?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClienteUncheckedUpdateWithoutDocumentosInput = {
    ID_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_departamento?: StringFieldUpdateOperationsInput | string
    nombre_provincia?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Estado_documentoUpsertWithoutDocumentosInput = {
    update: XOR<Estado_documentoUpdateWithoutDocumentosInput, Estado_documentoUncheckedUpdateWithoutDocumentosInput>
    create: XOR<Estado_documentoCreateWithoutDocumentosInput, Estado_documentoUncheckedCreateWithoutDocumentosInput>
    where?: Estado_documentoWhereInput
  }

  export type Estado_documentoUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: Estado_documentoWhereInput
    data: XOR<Estado_documentoUpdateWithoutDocumentosInput, Estado_documentoUncheckedUpdateWithoutDocumentosInput>
  }

  export type Estado_documentoUpdateWithoutDocumentosInput = {
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historiales?: Historial_documentosUpdateManyWithoutEstadoNestedInput
  }

  export type Estado_documentoUncheckedUpdateWithoutDocumentosInput = {
    ID_estado?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historiales?: Historial_documentosUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type ProyectoUpsertWithoutDocumentosInput = {
    update: XOR<ProyectoUpdateWithoutDocumentosInput, ProyectoUncheckedUpdateWithoutDocumentosInput>
    create: XOR<ProyectoCreateWithoutDocumentosInput, ProyectoUncheckedCreateWithoutDocumentosInput>
    where?: ProyectoWhereInput
  }

  export type ProyectoUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: ProyectoWhereInput
    data: XOR<ProyectoUpdateWithoutDocumentosInput, ProyectoUncheckedUpdateWithoutDocumentosInput>
  }

  export type ProyectoUpdateWithoutDocumentosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProyectoUncheckedUpdateWithoutDocumentosInput = {
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Historial_documentosUpsertWithWhereUniqueWithoutDocumentoInput = {
    where: Historial_documentosWhereUniqueInput
    update: XOR<Historial_documentosUpdateWithoutDocumentoInput, Historial_documentosUncheckedUpdateWithoutDocumentoInput>
    create: XOR<Historial_documentosCreateWithoutDocumentoInput, Historial_documentosUncheckedCreateWithoutDocumentoInput>
  }

  export type Historial_documentosUpdateWithWhereUniqueWithoutDocumentoInput = {
    where: Historial_documentosWhereUniqueInput
    data: XOR<Historial_documentosUpdateWithoutDocumentoInput, Historial_documentosUncheckedUpdateWithoutDocumentoInput>
  }

  export type Historial_documentosUpdateManyWithWhereWithoutDocumentoInput = {
    where: Historial_documentosScalarWhereInput
    data: XOR<Historial_documentosUpdateManyMutationInput, Historial_documentosUncheckedUpdateManyWithoutDocumentoInput>
  }

  export type DocumentoCreateWithoutHistorialesInput = {
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutDocumentosInput
    area: AreaCreateNestedOneWithoutDocumentosInput
    cliente: ClienteCreateNestedOneWithoutDocumentosInput
    estado: Estado_documentoCreateNestedOneWithoutDocumentosInput
    proyecto: ProyectoCreateNestedOneWithoutDocumentosInput
  }

  export type DocumentoUncheckedCreateWithoutHistorialesInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_cliente: number
    ID_proyecto: number
    ID_estado_documento: number
    ID_area: number
    ID_usuario: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DocumentoCreateOrConnectWithoutHistorialesInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutHistorialesInput, DocumentoUncheckedCreateWithoutHistorialesInput>
  }

  export type Estado_documentoCreateWithoutHistorialesInput = {
    estado: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoCreateNestedManyWithoutEstadoInput
  }

  export type Estado_documentoUncheckedCreateWithoutHistorialesInput = {
    ID_estado?: number
    estado: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type Estado_documentoCreateOrConnectWithoutHistorialesInput = {
    where: Estado_documentoWhereUniqueInput
    create: XOR<Estado_documentoCreateWithoutHistorialesInput, Estado_documentoUncheckedCreateWithoutHistorialesInput>
  }

  export type UsuarioCreateWithoutHistorialesInput = {
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    rol: string
    permisos?: UsuarioCreatepermisosInput | string[]
    estado?: string
    fecha_ingreso?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoCreateNestedManyWithoutUsuarioInput
    area: AreaCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutHistorialesInput = {
    ID_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    rol: string
    permisos?: UsuarioCreatepermisosInput | string[]
    estado?: string
    fecha_ingreso?: Date | string
    ID_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    documentos?: DocumentoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutHistorialesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutHistorialesInput, UsuarioUncheckedCreateWithoutHistorialesInput>
  }

  export type DocumentoUpsertWithoutHistorialesInput = {
    update: XOR<DocumentoUpdateWithoutHistorialesInput, DocumentoUncheckedUpdateWithoutHistorialesInput>
    create: XOR<DocumentoCreateWithoutHistorialesInput, DocumentoUncheckedCreateWithoutHistorialesInput>
    where?: DocumentoWhereInput
  }

  export type DocumentoUpdateToOneWithWhereWithoutHistorialesInput = {
    where?: DocumentoWhereInput
    data: XOR<DocumentoUpdateWithoutHistorialesInput, DocumentoUncheckedUpdateWithoutHistorialesInput>
  }

  export type DocumentoUpdateWithoutHistorialesInput = {
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutDocumentosNestedInput
    area?: AreaUpdateOneRequiredWithoutDocumentosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutDocumentosNestedInput
    estado?: Estado_documentoUpdateOneRequiredWithoutDocumentosNestedInput
    proyecto?: ProyectoUpdateOneRequiredWithoutDocumentosNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutHistorialesInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_cliente?: IntFieldUpdateOperationsInput | number
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    ID_area?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Estado_documentoUpsertWithoutHistorialesInput = {
    update: XOR<Estado_documentoUpdateWithoutHistorialesInput, Estado_documentoUncheckedUpdateWithoutHistorialesInput>
    create: XOR<Estado_documentoCreateWithoutHistorialesInput, Estado_documentoUncheckedCreateWithoutHistorialesInput>
    where?: Estado_documentoWhereInput
  }

  export type Estado_documentoUpdateToOneWithWhereWithoutHistorialesInput = {
    where?: Estado_documentoWhereInput
    data: XOR<Estado_documentoUpdateWithoutHistorialesInput, Estado_documentoUncheckedUpdateWithoutHistorialesInput>
  }

  export type Estado_documentoUpdateWithoutHistorialesInput = {
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUpdateManyWithoutEstadoNestedInput
  }

  export type Estado_documentoUncheckedUpdateWithoutHistorialesInput = {
    ID_estado?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type UsuarioUpsertWithoutHistorialesInput = {
    update: XOR<UsuarioUpdateWithoutHistorialesInput, UsuarioUncheckedUpdateWithoutHistorialesInput>
    create: XOR<UsuarioCreateWithoutHistorialesInput, UsuarioUncheckedCreateWithoutHistorialesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutHistorialesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutHistorialesInput, UsuarioUncheckedUpdateWithoutHistorialesInput>
  }

  export type UsuarioUpdateWithoutHistorialesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: UsuarioUpdatepermisosInput | string[]
    estado?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUpdateManyWithoutUsuarioNestedInput
    area?: AreaUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutHistorialesInput = {
    ID_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: UsuarioUpdatepermisosInput | string[]
    estado?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_area?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DocumentoCreateManyClienteInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_proyecto: number
    ID_estado_documento: number
    ID_area: number
    ID_usuario: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DocumentoUpdateWithoutClienteInput = {
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutDocumentosNestedInput
    area?: AreaUpdateOneRequiredWithoutDocumentosNestedInput
    estado?: Estado_documentoUpdateOneRequiredWithoutDocumentosNestedInput
    proyecto?: ProyectoUpdateOneRequiredWithoutDocumentosNestedInput
    historiales?: Historial_documentosUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutClienteInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    ID_area?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historiales?: Historial_documentosUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateManyWithoutClienteInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    ID_area?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentoCreateManyProyectoInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_cliente: number
    ID_estado_documento: number
    ID_area: number
    ID_usuario: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DocumentoUpdateWithoutProyectoInput = {
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutDocumentosNestedInput
    area?: AreaUpdateOneRequiredWithoutDocumentosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutDocumentosNestedInput
    estado?: Estado_documentoUpdateOneRequiredWithoutDocumentosNestedInput
    historiales?: Historial_documentosUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutProyectoInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_cliente?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    ID_area?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historiales?: Historial_documentosUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateManyWithoutProyectoInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_cliente?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    ID_area?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentoCreateManyEstadoInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_cliente: number
    ID_proyecto: number
    ID_area: number
    ID_usuario: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type Historial_documentosCreateManyEstadoInput = {
    ID_historial?: number
    fecha: Date | string
    ID_documento: number
    ID_usuario: number
    documento_historial: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DocumentoUpdateWithoutEstadoInput = {
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutDocumentosNestedInput
    area?: AreaUpdateOneRequiredWithoutDocumentosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutDocumentosNestedInput
    proyecto?: ProyectoUpdateOneRequiredWithoutDocumentosNestedInput
    historiales?: Historial_documentosUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutEstadoInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_cliente?: IntFieldUpdateOperationsInput | number
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    ID_area?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historiales?: Historial_documentosUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateManyWithoutEstadoInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_cliente?: IntFieldUpdateOperationsInput | number
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    ID_area?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Historial_documentosUpdateWithoutEstadoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documento?: DocumentoUpdateOneRequiredWithoutHistorialesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutHistorialesNestedInput
  }

  export type Historial_documentosUncheckedUpdateWithoutEstadoInput = {
    ID_historial?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_documento?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Historial_documentosUncheckedUpdateManyWithoutEstadoInput = {
    ID_historial?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_documento?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentoCreateManyAreaInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_cliente: number
    ID_proyecto: number
    ID_estado_documento: number
    ID_usuario: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UsuarioCreateManyAreaInput = {
    ID_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    rol: string
    permisos?: UsuarioCreatepermisosInput | string[]
    estado?: string
    fecha_ingreso?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DocumentoUpdateWithoutAreaInput = {
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutDocumentosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutDocumentosNestedInput
    estado?: Estado_documentoUpdateOneRequiredWithoutDocumentosNestedInput
    proyecto?: ProyectoUpdateOneRequiredWithoutDocumentosNestedInput
    historiales?: Historial_documentosUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutAreaInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_cliente?: IntFieldUpdateOperationsInput | number
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historiales?: Historial_documentosUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateManyWithoutAreaInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_cliente?: IntFieldUpdateOperationsInput | number
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    ID_usuario?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUpdateWithoutAreaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: UsuarioUpdatepermisosInput | string[]
    estado?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUpdateManyWithoutUsuarioNestedInput
    historiales?: Historial_documentosUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAreaInput = {
    ID_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: UsuarioUpdatepermisosInput | string[]
    estado?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: DocumentoUncheckedUpdateManyWithoutUsuarioNestedInput
    historiales?: Historial_documentosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutAreaInput = {
    ID_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: UsuarioUpdatepermisosInput | string[]
    estado?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentoCreateManyUsuarioInput = {
    ID_documento?: number
    nombre_documento: string
    tipo_documento: string
    archivo: string
    descripcion: string
    folio: string
    ID_cliente: number
    ID_proyecto: number
    ID_estado_documento: number
    ID_area: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type Historial_documentosCreateManyUsuarioInput = {
    ID_historial?: number
    fecha: Date | string
    ID_documento: number
    ID_estado_documento: number
    documento_historial: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DocumentoUpdateWithoutUsuarioInput = {
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    area?: AreaUpdateOneRequiredWithoutDocumentosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutDocumentosNestedInput
    estado?: Estado_documentoUpdateOneRequiredWithoutDocumentosNestedInput
    proyecto?: ProyectoUpdateOneRequiredWithoutDocumentosNestedInput
    historiales?: Historial_documentosUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutUsuarioInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_cliente?: IntFieldUpdateOperationsInput | number
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    ID_area?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    historiales?: Historial_documentosUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateManyWithoutUsuarioInput = {
    ID_documento?: IntFieldUpdateOperationsInput | number
    nombre_documento?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    ID_cliente?: IntFieldUpdateOperationsInput | number
    ID_proyecto?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    ID_area?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Historial_documentosUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documento?: DocumentoUpdateOneRequiredWithoutHistorialesNestedInput
    estado?: Estado_documentoUpdateOneRequiredWithoutHistorialesNestedInput
  }

  export type Historial_documentosUncheckedUpdateWithoutUsuarioInput = {
    ID_historial?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_documento?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Historial_documentosUncheckedUpdateManyWithoutUsuarioInput = {
    ID_historial?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_documento?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Historial_documentosCreateManyDocumentoInput = {
    ID_historial?: number
    fecha: Date | string
    ID_usuario: number
    ID_estado_documento: number
    documento_historial: string
    descripcion: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type Historial_documentosUpdateWithoutDocumentoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: Estado_documentoUpdateOneRequiredWithoutHistorialesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutHistorialesNestedInput
  }

  export type Historial_documentosUncheckedUpdateWithoutDocumentoInput = {
    ID_historial?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_usuario?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Historial_documentosUncheckedUpdateManyWithoutDocumentoInput = {
    ID_historial?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_usuario?: IntFieldUpdateOperationsInput | number
    ID_estado_documento?: IntFieldUpdateOperationsInput | number
    documento_historial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
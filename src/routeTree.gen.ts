/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PoeImport } from './routes/poe'
import { Route as PoeCompassImport } from './routes/poe.compass'
import { Route as PoeCompassPostImport } from './routes/poe.compass.post'
import { Route as PoeCompassListingsImport } from './routes/poe.compass.listings'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const PoeRoute = PoeImport.update({
  path: '/poe',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const PoeCompassRoute = PoeCompassImport.update({
  path: '/compass',
  getParentRoute: () => PoeRoute,
} as any)

const PoeCompassPostRoute = PoeCompassPostImport.update({
  path: '/post',
  getParentRoute: () => PoeCompassRoute,
} as any)

const PoeCompassListingsRoute = PoeCompassListingsImport.update({
  path: '/listings',
  getParentRoute: () => PoeCompassRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/poe': {
      preLoaderRoute: typeof PoeImport
      parentRoute: typeof rootRoute
    }
    '/poe/compass': {
      preLoaderRoute: typeof PoeCompassImport
      parentRoute: typeof PoeImport
    }
    '/poe/compass/listings': {
      preLoaderRoute: typeof PoeCompassListingsImport
      parentRoute: typeof PoeCompassImport
    }
    '/poe/compass/post': {
      preLoaderRoute: typeof PoeCompassPostImport
      parentRoute: typeof PoeCompassImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  PoeRoute.addChildren([
    PoeCompassRoute.addChildren([PoeCompassListingsRoute, PoeCompassPostRoute]),
  ]),
])

/* prettier-ignore-end */

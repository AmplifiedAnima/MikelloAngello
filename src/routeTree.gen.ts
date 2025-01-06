/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as OfertaImport } from './routes/oferta'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const OfertaRoute = OfertaImport.update({
  id: '/oferta',
  path: '/oferta',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/oferta': {
      id: '/oferta'
      path: '/oferta'
      fullPath: '/oferta'
      preLoaderRoute: typeof OfertaImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/oferta': typeof OfertaRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/oferta': typeof OfertaRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/oferta': typeof OfertaRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/oferta'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/oferta'
  id: '__root__' | '/' | '/oferta'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  OfertaRoute: typeof OfertaRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  OfertaRoute: OfertaRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/oferta"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/oferta": {
      "filePath": "oferta.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

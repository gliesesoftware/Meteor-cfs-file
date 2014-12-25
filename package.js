Package.describe({
  git: 'https://github.com/gliesesoftware/cfs-file.git',
  name: 'gliese:cfs-file',
  version: '0.1.16',
  summary: 'Gliese flavour of the CollectionFS FS.File object (INTERNAL USE ONLY)'
});

Npm.depends({
  temp: "0.7.0" // for tests only
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  // This imply is needed for tests, and is technically probably correct anyway.
  api.imply([
    'gliese:cfs-base@0.0.28'
  ]);

  api.use([
    'gliese:cfs-base@0.0.28',
    'gliese:cfs-storage@0.1.2',
    'tracker',
    'check',
    'ddp',
    'mongo',
    'http',
    'cfs:data-man@0.0.4',
    'raix:eventemitter@0.1.1'
  ]);

  api.addFiles([
    'fsFile-common.js'
  ], 'client');

  api.addFiles([
    'fsFile-common.js',
    'fsFile-server.js'
  ], 'server');
});

Package.onTest(function (api) {
  api.use([
    'gliese:cfs-core@0.0.0',
    'gliese:cfs-gridfs@0.0.0',
    'tinytest@1.0.0',
    'http@1.0.0',
    'test-helpers@1.0.0',
    'cfs:http-methods@0.0.24'
  ]);

  api.addFiles([
    'tests/file-tests.js'
  ]);
});

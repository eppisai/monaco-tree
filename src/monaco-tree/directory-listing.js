const directoryListing = [
    "changelog.txt",
    "debug.js",
    "license.txt",
    "readme.md",
    "release.js",
    "controllers/api.js",
    "controllers/chat.js",
    "controllers/default.js",
    "databases/channels.json",
    "databases/users.json",
    "definitions/auth.js",
    "definitions/convertors.js",
    "definitions/globals.js",
    "definitions/helpers.js",
    "definitions/localization.js",
    "definitions/merge.js",
    "definitions/operations.js",
    "definitions/scheduler.js",
    "models/account.js",
    "models/channels.js",
    "models/favorites.js",
    "models/login.js",
    "models/messages.js",
    "models/tasks.js",
    "models/users.js",
    "public/favicon.ico",
    "public/icon.png",
    "views/index.html",
    "views/login.html",
    "views/notification.html",
    "public/css/bootstrap.min.css",
    "public/css/default.css",
    "public/css/ui.css",
    "public/forms/files.html",
    "public/forms/formblacklist.html",
    "public/forms/formchannel.html",
    "public/forms/formuser.html",
    "public/forms/help.html",
    "public/img/preloader.gif",
    "public/photos/face.jpg",
    "public/js/default.js",
    "public/js/jctajr.min.js",
    "public/js/ui.js",
    "public/templates/chat.html",
    "public/templates/favorite.html",
    "public/templates/settings.html",
    "public/templates/tasks.html",
    "public/templates/users.html",
  ];

  const TempFiles = {
    "changelog.txt" : {
        code: 'hye there',
        hidden: true,
    },
    "debug.js": {
        code: 'hye there',
        hidden: true,
    },
    "license.txt": {
        code: 'hye there',
        hidden: true,
    },
    "readme.md": {
        code: 'hye there',
        hidden: true,
    },
    "release.js": {
        code: 'hye there',
        hidden: true,
    },
    "controllers/api.js": {
        code: 'hye there',
        hidden: true,
    },
    "controllers/chat.js": {
        code: 'hye there',
        hidden: true,
    },
    "controllers/default.js": {
        code: 'hye there',
        hidden: true,
    },
    "databases/channels.json": {
        code: 'hye there',
        hidden: true,
    },
    "databases/users.json": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/auth.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/convertors.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/globals.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/helpers.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/localization.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/merge.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/operations.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/scheduler.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/account.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/channels.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/favorites.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/login.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/messages.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/tasks.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/users.js": {
        code: 'hye there',
        hidden: true,
    },
    "public/favicon.ico": {
        code: 'hye there',
        hidden: true,
    },
    "public/icon.png": {
        code: 'hye there',
        hidden: true,
    },
    "views/index.html": {
        code: 'hye there',
        hidden: true,
    },
    "views/login.html": {
        code: 'hye there',
        hidden: true,
    },
    "views/notification.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/css/bootstrap.min.css": {
        code: 'hye there',
        hidden: true,
    },
    "public/css/default.css": {
        code: 'hye there',
        hidden: true,
    },
    "public/css/ui.css": {
        code: 'hye there',
        hidden: true,
    },
    "public/forms/files.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/forms/formblacklist.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/forms/formchannel.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/forms/formuser.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/forms/help.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/img/preloader.gif": {
        code: 'hye there',
        hidden: true,
    },
    "public/photos/face.jpg": {
        code: 'hye there',
        hidden: true,
    },
    "public/js/default.js": {
        code: 'hye there',
        hidden: true,
    },
    "public/js/jctajr.min.js": {
        code: 'hye there',
        hidden: true,
    },
    "public/js/ui.js": {
        code: 'hye there',
        hidden: true,
    },
    "public/templates/chat.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/templates/favorite.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/templates/settings.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/templates/tasks.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/templates/users.html": {
        code: 'hye there',
        hidden: false,
    },
};

const Files = {
    "changelog.txt" : {
        code: 'hye there',
        hidden: true,
    },
    "debug.js": {
        code: 'hye there',
        hidden: true,
    },
    "license.txt": {
        code: 'hye there',
        hidden: true,
    },
    "readme.md": {
        code: 'hye there',
        hidden: true,
    },
    "release.js": {
        code: 'hye there',
        hidden: true,
    },
    "controllers/api.js": {
        code: 'hye there',
        hidden: true,
    },
    "controllers/chat.js": {
        code: 'hye there',
        hidden: true,
    },
    "controllers/default.js": {
        code: 'hye there',
        hidden: true,
    },
    "databases/channels.json": {
        code: 'hye there',
        hidden: true,
    },
    "databases/users.json": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/auth.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/convertors.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/globals.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/helpers.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/localization.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/merge.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/operations.js": {
        code: 'hye there',
        hidden: true,
    },
    "definitions/scheduler.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/account.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/channels.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/favorites.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/login.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/messages.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/tasks.js": {
        code: 'hye there',
        hidden: true,
    },
    "models/users.js": {
        code: 'hye there',
        hidden: true,
    },
    "public/favicon.ico": {
        code: 'hye there',
        hidden: true,
    },
    "public/icon.png": {
        code: 'hye there',
        hidden: true,
    },
    "views/index.html": {
        code: 'hye there',
        hidden: true,
    },
    "views/login.html": {
        code: 'hye there',
        hidden: true,
    },
    "views/notification.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/css/bootstrap.min.css": {
        code: 'hye there',
        hidden: true,
    },
    "public/css/default.css": {
        code: 'hye there',
        hidden: true,
    },
    "public/css/ui.css": {
        code: 'hye there',
        hidden: true,
    },
    "public/forms/files.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/forms/formblacklist.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/forms/formchannel.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/forms/formuser.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/forms/help.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/img/preloader.gif": {
        code: 'hye there',
        hidden: true,
    },
    "public/photos/face.jpg": {
        code: 'hye there',
        hidden: true,
    },
    "public/js/default.js": {
        code: 'hye there',
        hidden: true,
    },
    "public/js/jctajr.min.js": {
        code: 'hye there',
        hidden: true,
    },
    "public/js/ui.js": {
        code: 'hye there',
        hidden: true,
    },
    "public/templates/chat.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/templates/favorite.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/templates/settings.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/templates/tasks.html": {
        code: 'hye there',
        hidden: true,
    },
    "public/templates/users.html": {
        code: 'hye there',
        hidden: false,
    },
};
export { directoryListing, Files, TempFiles };
  
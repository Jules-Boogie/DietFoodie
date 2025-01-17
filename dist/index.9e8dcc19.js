// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2C6uN":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "bacbeddf5880437d312a46d99e8dcc19";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"1hp6y":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "getRecipes", function () {
  return getRecipes;
});
_parcelHelpers.export(exports, "state", function () {
  return state;
});
_parcelHelpers.export(exports, "setState", function () {
  return setState;
});
_parcelHelpers.export(exports, "addBookmarks", function () {
  return addBookmarks;
});
_parcelHelpers.export(exports, "deleteBookmarks", function () {
  return deleteBookmarks;
});
var _dataData = require('../data/data');
var _dataDataDefault = _parcelHelpers.interopDefault(_dataData);
const getRecipes = async () => {
  try {
    const response = await fetch('https://learning-68ad4-default-rtdb.firebaseio.com/0.json');
    const data1 = await response.json();
    if (!response.ok) throw new Error('call to the database was not successful');
    return data1;
  } catch (err) {
    console.log(err);
  }
};
const state = {
  recipes: [],
  region: _dataDataDefault.default.region,
  diet: _dataDataDefault.default.diet,
  bookmarks: [],
  mode: {
    light: false,
    dark: true
  }
};
const setState = (mode, value) => {
  state.mode[mode] = value;
  localStorage.setItem('mode', JSON.stringify(state.mode));
};
const retrieveMode = () => {
  const mode = localStorage.getItem('mode');
  if (mode) {
    state.mode = JSON.parse(mode);
  } else {
    localStorage.setItem('mode', JSON.stringify(state.mode));
  }
};
const storeBookmark = () => {
  localStorage.setItem('bookmark', JSON.stringify(state.bookmarks));
};
const retrieveBookmark = () => {
  const bookmark = localStorage.getItem('bookmark');
  if (bookmark) state.bookmarks = JSON.parse(bookmark);
};
const addBookmarks = recipe => {
  recipe = {
    ...recipe,
    bookmarked: true
  };
  state.bookmarks.push(recipe);
  state.recipes[recipe.id].bookmarked = true;
  storeBookmark();
};
const deleteBookmarks = recipeId => {
  const id = state.bookmarks.findIndex(recipe => recipe.id == recipeId);
  state.bookmarks.splice(id, 1);
  state.recipes[id].bookmarked = false;
  storeBookmark();
};
const init = () => {
  retrieveBookmark();
  retrieveMode();
};
init();

},{"../data/data":"3X9FW","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3X9FW":[function(require,module,exports) {
const recipes = [
  {
    name: 'Jollof Rice',
    country: 'Nigeria',
    publisher: {
      name: 'Yewande Komolafe',
      bio: 'Yewande Komolafe is a recipe developer, food stylist and author of the New York Times “10 Essential Nigerian Recipes’. She is currently working on her first cookbook, an as-yet-untitled collection of essential Nigerian Recipes (Ten Speed Press, Fall 2021), rooted in the converging cuisines of her hometown Lagos.',
      pic: 'https://static01.nyt.com/images/2019/06/26/dining/24Nigerian1/24Nigerian1-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
      social: 'https://www.instagram.com/yewande_komolafe/',
    },
    images: [
      'https://i0.wp.com/biscuitsandladles.com/wp-content/uploads/2017/06/beef-jollof.jpg?ssl=1',
      'https://www.chinne.org/wp-content/uploads/2020/04/Jollof-Rice.jpg',
      'https://static01.nyt.com/images/2019/06/26/dining/24Nigerianrex1/merlin_156459840_f874ce2c-2a73-4c58-b4e4-15cf91169bbb-articleLarge.jpg',
    ],
    time: '1:30',
    ratingsAverage: 4.0,
    ratingsQuantity: 1338,
    tags: ['omnivore', 'rice', 'west-african'],
    servings: 8,
    ingredients: [
      '1 (14-ounce) can whole peeled tomatoes with their juices',
      '1 medium red bell pepper, stemmed, seeded and roughly chopped',
      'medium red onion, peeled and roughly chopped',
      '4 garlic cloves, peeled',
      '(1-inch) piece fresh ginger, peeled and finely chopped',
      '1 red habanero chile, stemmed',
      '2 tablespoons canola or other neutral oil',
      ' 1/2 cup canola or other neutral oil',
      'medium red onions, peeled, halved and thinly sliced',
      '4 garlic cloves, thinly sliced',
      '1 tablespoon tomato paste',
      '1 teaspoon ground turmeric',
      '1 teaspoon smoked paprika',
      'cups parboiled long-grain rice (such as Carolina Gold or Uncle Ben’s Original), basmati or jasmine rice (about 1¼ pounds)',
      '5 fresh thyme sprigs',
      '1 fresh bay leaf',
      'Kosher salt and freshly ground black pepper',
      '2 cups beef, chicken or vegetable stock',
    ],
    preparation: [
      'Prepare the obe ata: Working in batches if needed, combine all the obe ata ingredients except the canola oil in a blender and purée on high until smooth. The liquid from the can of tomatoes should suffice, but you can add up to 1/4 cup of water if necessary to get the purée going. (You should have about 3 cups of purée.)',
      'Heat the 2 tablespoons canola oil in a medium saucepan over medium-high. Add the purée and bring to a simmer. Reduce heat to medium, cover and simmer until the sauce is slightly reduced by about a third of its original volume, 18 to 20 minutes. (It should make about 2 cups. Obe ata can be cooled and refrigerated for up to 2 weeks, or frozen for up to 1 month.)',
      'Prepare the rice: Heat the oven to 350 degrees. Heat the 1/2 cup canola oil in a large Dutch oven over medium until shimmering, about 1 minute. Add the onions and cook, stirring frequently, until softened, 6 to 8 minutes. Remove half the onions to a plate and set aside. Add the garlic and sauté until fragrant and translucent, about 2 minutes. Add the tomato paste, turmeric and smoked paprika, if using, and toast, stirring occasionally, until turmeric is fragrant and tomato paste has deepened to a dark red color, about 2 minutes.',
      'Stir in the obe ata sauce and bring to a simmer over medium heat. The habanero oils love to disperse in the air, so you may want to turn on your stovetop fan or open a window while simmering the obe ata. Stir in the rice, thyme and bay leaf, and season with salt and pepper. Stir in the stock and cover with a lid. Transfer the pot to the oven and cook until rice is just tender, 35 minutes.',
      'Remove the pot from the oven and let sit, covered (no peeking) for 15 minutes. Uncover, fluff the rice with a fork and stir in the reserved sautéed onions. Adjust seasoning, if necessary, and discard the thyme sprigs and bay leaf. Serve warm.',
    ],
    reviews: [
      {
        writer: 'Cara',
        review:
          'I love this recipe so much. The reserved onions make it really special, and the 2 cup obe ata measurement is perfect for the rice. So delicious!!!',
      },
      {
        writer: 'Mary Z',
        review:
          "This will be my go-to potluck dish once parties become a thing again. I can't imagine anyone not loving it.",
      },
      {
        writer: 'Chicago Chunk',
        review:
          "I've cooked this several times now, always using about half the 'raw' obe ata as a braising sauce for either pork shoulder or goat leg. Then when I make the Jollaf rice I use 1 cup of raw sauce and 1 cup of braising liquid to bring more depth to the rice and sort of marry to two dishes. A friend of mine who has eaten much of my cooking exclaimed while eating the pork and rice, 'this is the best thing you've ever made!' So I made it for Xmas Eve last year. Having it for St Patty's Day today!",
      },
      {
        writer: 'Ignatius',
        review:
          'This dish was amazing The only thing I’d do different is add another habanero to it but otherwise it was great',
      },
      {
        writer: 'Carla',
        review:
          'The rice is delicious, don’t be afraid to add the habanero pepper, it gives a nice spice flavor, nothing overwhelming. The rice/water rate looks off (compare to making white rice on the stove top) but it works perfectly. Looking forward to eat the leftovers.',
      },
      {
        writer: 'Nicky',
        review:
          "I don't often comment on recipes, but as I devour the leftovers from last night for lunch today I am inspired to shout from the rooftops how incredibly delicious this recipe is! The only difference I made was I used black forbidden rice (because thats what I had but I'd do it again and again) I was worried the rice-to-liquid ratio would be off but it wasn't. I used homemade vegetable stock and fresh turmeric which was definitely the move. I served it with the Beef Suya (Tofu Suya for me).",
      },
    ],
  },
  {
    name: 'Puff Puff',
    publisher: {
      name: 'Ronke Edoho',
      bio: 'Ronke Edoho is the Founder and Creative administrator for the popular Nigerian Food Blog 9jafoodie.com. Ronke started the blog to educate the world on Nigerian food as well as find modern ways to present traditional recipes. She is a certified Clinical weight loss specialist and author of the cookbook Lose It Nigerian. Her cookbook focuses on healthy modification to traditional Nigerian recipes for people who are interested in eating clean and or losing weight. Born and raised in Nigeria, Ronke has lived in Canada for over eleven years. Ronke spends her spare time creating content for the 9jafoodie blog as well as building relationships with her socia medial followers.',
      pic: 'https://loseitnigerian.com/wp-content/uploads/2020/04/Ronke-Edoho-LIN-200x300.jpg',
      social: 'https://www.instagram.com/9jafoodie/?hl=en',
    },
    country: 'Nigeria',
    images: [
      'https://www.myactivekitchen.com/wp-content/uploads/2019/05/nigerian-puff-puff-recipe-how-to-make-puff-puff-img-1.jpg',
      'https://simshomekitchen.com/wp-content/uploads/2020/03/puff-puff-pepper.png',
    ],
    time: '1:5',
    ratingsAverage: 0,
    ratingsQuantity: 0,
    tags: ['vegetarian', 'west-african', 'pescatarian'],
    servings: 14,
    ingredients: [
      '3 cups flour (375 grams)',
      '4 teaspoons quick rise yeast',
      '2/3 – 1 cup sugar (133 -201 grams)',
      '1/2 tsp nutmeg',
      '2 cups lukewarm water',
      'Frying oil',
    ],
    preparation: [
      'In a mixing bowl, thoroughly combine the dry ingredients. Slowly add in water while mixing. Stop as soon as water is incorporated and batter is smooth. (Batter should be thick and smooth with a couple of bubbles )',
      'Cover the mixture with a table cloth. Set aside in a warm place for 45-60 minutes',
      'Set a large pot on medium heat, add in the oil and heat until hot.',
      'Scoop enough mix with your hand and drop the ball in oil. Repeat until pan of oil is full.Fry until golden brown on all sides.',
    ],
    reviews: [
      {
        writer: 'Emmanuel',
        review:
          'I love this recipe that what I’m going to do tomorrow morning for my kids them to eat',
      },
      {
        review: 'U are really good, i’ve learnt a lot',
        writer: 'Perpetual okafor',
      },
      {
        review:
          'I tried it and it was great and it helped as just snack to eat and enjoy',
        writer: 'Edudje favor',
      },
    ],
  },
  {
    name: 'CHAKCHOUKA',
    country: 'Tunisia',
    publisher: {
      name: 'Melissa Clark',
      bio: 'Food writer and cookbook author Melissa Clark is staff reporter for the New York Times Food section. She reports on trends, creates recipes and appears in videos linked to her column, A Good Appetite. She’s also written dozens of cookbooks. A native of Brooklyn, she knows where to find the best bagel.',
      pic: 'https://static01.nyt.com/images/2014/04/24/dining/clarkCP/clarkCP-thumbLarge-v2.jpg',
      social: 'https://www.instagram.com/clarkbar/',
    },
    images: [
      'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_562,h_316/v1/img/recipes/19/54/74/sOjF41znSkS43qZuHcUe_6F1D07D9-13BF-4B0B-9562-314666455C7C-697-0000011EA9A569F2.jpeg',
      'https://www.curiouscuisiniere.com/wp-content/uploads/2016/09/Chakchouka-Tunisian-Eggs-in-Tomato-Sauce-7507.450-450x375.jpg',
      'https://cdn.loveandlemons.com/wp-content/uploads/2017/01/shakshuka.jpg',
      'https://cdn.loveandlemons.com/wp-content/uploads/2017/01/IMG_24344-580x792.jpg',
      'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
    ],
    time: '0:50',
    ratingsAverage: 5.0,
    ratingsQuantity: 9902,
    tags: ['vegetarian', 'north-african', 'pescatarian', 'paleo'],
    servings: 4,
    ingredients: [
      '3 tablespoons extra-virgin olive oil',
      '1 large onion, halved and thinly sliced',
      '1 large red bell pepper, seeded and thinly sliced',
      '3 garlic cloves, thinly sliced',
      '1 teaspoon ground cumin',
      '1 teaspoon sweet paprika',
      '⅛ teaspoon ground cayenne, or to taste',
      '1 (28-ounce) can whole plum tomatoes with their juices, coarsely chopped',
      '¾ teaspoon kosher salt, plus more as needed',
      '¼ teaspoon black pepper, plus more as needed',
      '5 ounces feta, crumbled (about 1 1/4 cups)',
      '6 large eggs',
      'Chopped cilantro, for serving',
      'Hot sauce, for serving',
    ],
    preparation: [
      'Heat oven to 375 degrees. Heat oil in a large skillet over medium-low. Add onion and bell pepper. Cook gently until very soft, about 20 minutes. Add garlic and cook until tender, 1 to 2 minutes; stir in cumin, paprika and cayenne, and cook 1 minute. Pour in tomatoes and season with 3/4 teaspoon salt and 1/4 teaspoon pepper; simmer until tomatoes have thickened, about 10 minutes. Taste and add more salt and pepper if needed. Stir in crumbled feta.',
      'Gently crack eggs into skillet over tomatoes. Season eggs with salt and pepper. Transfer skillet to oven and bake until eggs are just set, 7 to 10 minutes. Sprinkle with cilantro and serve with hot sauce.',
    ],
    reviews: [
      {
        writer: 'Federal Pioneer',
        review:
          "Bomb daddy. Didn't have the peps, but went hard in the paint anyway. Hella fire. x",
      },
      {
        writer: 'Steve',
        review:
          'We make this in the style that we first ate it in Morocco, with the addition of ground coriander, cinnamon, turmeric, allspice and - if we have it - saffron to the spice mixture.',
      },
      {
        writer: 'MrsWhatsIt',
        review:
          'One of my all time favorite NYT recipes. I also at least double the spices. It makes a big difference if you make sure to let it cook down. Stovetop for the eggs works like a charm. This time I served it over polenta. Delicious!',
      },
      {
        writer: 'Erika',
        review:
          'Fit perfectly in a 10 cast iron skillet. Great over basmati rice. 5 stars!',
      },
      {
        writer: 'Linda H',
        review:
          'I served this the morning after Thanksgiving for 20 house guests. The sauce was made a few days ahead. Rave reviews. This is one of my favorite comfort foods, first eaten at an Israeli restaurant in Brooklyn many years ago. This is a superb version.',
      },
    ],
  },
  {
    name: 'Meatballs',
    country: 'Tunisia',
    publisher: {
      name: 'David Tanis',
      bio: 'David Tanis has worked as a professional chef for over three decades, and is the author of several acclaimed cookbooks, including A Platter of Figs and Other Recipes, which was chosen as one of the 50 best cookbooks ever by the Guardian/Observer (U.K.).',
      pic: 'https://davidtanis.com/wp-content/uploads/2013/08/davidtanis.jpg',
      social: 'https://www.instagram.com/david_tanis/?hl=en',
    },
    images: [
      'https://static01.nyt.com/images/2012/09/19/dining/19KITCH_SPAN/19KITCH_SPAN-articleLarge-v2.jpg',
      'https://i2.wp.com/www.conorbofin.com/wp-content/uploads/2016/01/north-african-meatballs-12-of-12.jpg?resize=1060%2C804',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/8/26/0/0136137_02_several-meatballs-served-on-platter_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485879830068.jpeg',
      'https://img.taste.com.au/wlq8ZG9R/w720-h480-cfill-q80/taste/2018/04/north-african-lamb-meatballs-with-couscous-136725-1.jpg',
    ],
    time: '1:15',
    ratingsAverage: 5.0,
    ratingsQuantity: 2215,
    tags: ['omnivore', 'paleo', 'north-african'],
    servings: 6,
    ingredients: [
      '2 tablespoons olive oil',
      '1 and 1/2 cups finely diced onion',
      '3 garlic cloves, minced',
      '2 tablespoons tomato paste',
      '1 inch piece cinnamon stick',
      'Large pinch saffron, crumbled',
      'Salt and pepper',
      '3 cups chicken broth, vegetable broth or water',
      '1 and 1/2 cups cubed day-old firm white bread',
      '1 cup milk',
      '1 pound ground beef or lamb',
      '1 large egg, beaten',
      '1 teaspoon salt',
      '¼ teaspoon black pepper',
      '4 garlic cloves, minced',
      '⅛ teaspoon grated nutmeg',
      '1 teaspoon ground ginger',
      '1 teaspoon turmeric',
      '2 teaspoons paprika',
      '¼ teaspoon cayenne',
      '¼ teaspoon ground cloves',
      '¼ teaspoon ground coriander',
      '½ teaspoon ground cumin',
      '3 tablespoons chopped parsley',
      '3 tablespoons chopped cilantro',
      '3 tablespoons finely chopped scallion',
      'All-purpose flour, for dusting',
      'Olive oil or vegetable oil',
    ],
    preparation: [
      'Make the sauce: Heat oil over medium-high heat in a wide, heavy bottomed saucepan. Add onion and cook without browning until softened, about 5 minutes. Add garlic, tomato paste, cinnamon and saffron, and stir well to incorporate. Season generously with salt and pepper, and allow to sizzle for 1 minute more. Add broth and simmer gently for 5 minutes. May be made several hours in advance, up to a day.',
      'Make the meatballs: Put bread cubes and milk in a small bowl. Leave bread to soak until softened, about 5 minutes, then squeeze dry.',
      'In a mixing bowl, put squeezed-out bread, ground meat and egg. Add salt, pepper, garlic, nutmeg, ginger, turmeric, paprika, cayenne, cloves, coriander and cumin. Mix well with hands to distribute seasoning. Add 2 tablespoons each of parsley, cilantro and scallion, and knead for a minute. May be prepared several hours in advance, up to a day.',
      'With hands, roll mixture into small round balls about the size of a quarter. Dust balls lightly with flour. Heat a few tablespoons of oil, or a quarter-inch depth, over medium-high heat and fry meatballs until barely browned, about 2 minutes per side. Drain and blot on paper towel. Simmer meatballs in saffron-tomato sauce, covered, over medium heat for about 20 minutes, until tender.',
      'Meanwhile, make the couscous, if desired: Cook according to package directions, fluff gently and stir in butter and raisins. Season with salt and cinnamon, and toss well.',
      'Garnish meatballs with remaining parsley, cilantro and scallion. Serve with couscous and roasted tomatoes if desired.',
    ],
    reviews: [
      {
        writer: 'Matthew',
        review: 'This might be one of the best dishes I’ve ever eaten',
      },
      {
        writer: 'Margot',
        review:
          'Truly fantastic !! The only major change I made was to cut the broth from 3 cups to 1 cup. For me, that was the right consistency',
      },
      {
        writer: 'Kristin',
        review:
          'Truly fantastic !! The only major change I made was to cut the broth from 3 cups to 1 cup. For me, that was the right consistency',
      },
      {
        writer: 'Lucy',
        review:
          'Amazing recipe. Will definitely be making this again and again. Looking forward to sharing this with guests once the pandemic is over with.',
      },
    ],
  },
  {
    name: 'MCHUZI WA SAMAKI',
    publisher: { name: 'WiGal' },
    country: 'Tanzania',
    images: [
      'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_562,h_316/v1/img/recipes/30/89/48/piciM34TE.jpg',
      'https://www.tasteatlas.com/images/dishes/d398f08b537c4c319ff062072f3f4f10.jpg',
      'http://www.nutribasket.in/wp-content/uploads/2017/12/www.flavorsofmumbai.com2Fwp-content2Fuploads2F20112F072FOrangish-Fish-Ambotik-Curry-Recipe.jpg',
    ],
    time: '0:30',
    ratingsAverage: 5,
    ratingsQuantity: 8,
    tags: ['east-african', 'pescatarian', 'omnivore', 'paleo'],
    servings: 2,
    ingredients: [
      '1 tablespoon vegetable oil',
      '2 onions, sliced',
      '3 garlic cloves, crushed',
      '1 teaspoon curry powder',
      '2 tomatoes, sliced',
      '1 teaspoon tomato puree',
      '1 tablespoon fresh coriander, chopped',
      '1 lb fish, filleted',
      '1 tablespoon lemon juice',
      '1 teaspoon salt',
      '1⁄2 cup water',
    ],
    preparation: [
      'Fry onions in vegetable oil until brown.',
      'Add garlic and curry powder.',
      'Stirring vigorously, cook for 1 minute on medium heat.',
      'Add tomatoes, tomato puree, fresh coriander; cook for another minute.',
      'Add fish, lemon juice, salt, and water.',
      'Cover and cook on low heat for 15-20 minutes.',
      'Serve hot with rice.',
    ],
    reviews: [
      {
        writer: 'Breezymon',
        review:
          "Nice spicy fish....I'll add a little fire to this next time with some cayenne to liven it up. This recipe is really visually appealing, so it would be nice for a dinner party. But it's quick enough for a week night. Thanks for sharing!",
      },
      {
        writer: 'Vicky',
        review:
          "One of my favorite things I've ever made. Used Thai curry paste, a good couple of tablespoons. Added cilantro after cooked. Made with cod filets.",
      },
    ],
  },
  {
    name: 'Benachin',
    publisher: {
      name: 'LAMIN JARJU',
      pic: 'https://img-global.cpcdn.com/users/5962507927683072/108x108cq50/avatar.webp',
    },
    country: 'Gambia',
    images: [
      'https://answerwiki.net/wp-content/uploads/2019/03/gambian-food_243996-1170x610.jpeg',
      'https://i.ytimg.com/vi/FUIuVKnKZwU/maxresdefault.jpg',
      'https://img-global.cpcdn.com/recipes/5865870920253440/680x482cq70/benachin-or-jollof-rice-from-senegambia-gambia-senegal-recipe-main-photo.webp',
    ],
    time: '0:40',
    ratingsAverage: 0,
    ratingsQuantity: 0,
    tags: ['west-african'],
    servings: 4,
    ingredients: [
      '2 lb Fresh fish500ML ',
      'Vegetable oil',
      '4 cup Water',
      '1 medium Fresh tomato',
      '2 large Onions',
      '1 small Cabbage',
      '2 medium Carrots',
      '2 Bay leaves',
      '2 cup Of rice',
      '180gm tomatoes paste',
    ],
    preparation: [
      'Clean and cut fish in halves.',
      'Fry the fish in the vegetable oil until both sides are brown.',
      'Remove fish and add onions, fresh tomato and paste to the hot oil and fry until brown.',
      'Pour water and bring to boil, then include cabbage, carrots, bay leaf, add seasonings, reduce heat and simmer for 20 mins. ',
      'Remove vegetables and add the rice while continuously stirring. ',
      'Reduce heat and cover the pot. Simmer for 10 mins. ',
    ],
    reviews: [{ writer: '', review: '' }],
  },
  {
    name: 'MISIR WOT',
    publisher: {
      name: 'Lizet',
      pic: 'https://chipabythedozen.com/wp-content/uploads/2020/02/lizet.jpg?ezimgfmt=rs:300x200/rscb1/ng:webp/ngcb1',
    },
    images: [
      'https://www.daringgourmet.com/wp-content/uploads/2018/04/Misir-Wat-3-square-728x728.jpg',
      'https://preview.redd.it/3os27zha92k11.jpg?auto=webp&s=136142dfde9eecdbd484cb894691917e0736ff41',
      'https://i.pinimg.com/originals/b4/e8/49/b4e8494efd1ed7c46ea839de3d47d640.jpg',
      'https://spicecravings.com/wp-content/uploads/2020/07/Misir-Wot-Pin-1.jpg',
    ],
    time: '0:45',
    country: 'Ethiopia',
    ratingsAverage: 5,
    ratingsQuantity: 10,
    tags: ['vegetarian', 'east-african'],
    servings: 6,
    ingredients: [
      '1 cup red lentils',
      '4 cups water',
      '1 red onions, finely chopped',
      '1 tablespoon  minced garlic',
      '1 tablespoon  grated fresh ginger',
      '2 tablespoons spiced butter (niter kibbeh)',
      '1-1/2 tablespoons berbere',
      '1/2 teaspoon ground black pepper',
      '1/4 teaspoon ground black cardamom',
      '1/4 teaspoon ground green cardamom',
      '1/8 teaspoon ground cinnamon',
      '1/8 teaspoon ground cumin',
      '1/8 teaspoon ground cloves',
      '1/8 teaspoon ground nutmeg',
      'salt to taste',
    ],
    preparation: [
      "In a medium saucepan, cook lentils with 4 cups of water. About 10 minutes or until soft. Don't drain.",
      'Add the onions to a medium skillet over medium heat. Cook, stirring constantly, until water evaporates, about 10 minutes, taking care not to burn them. You may need to reduce the heat as the onions dry out. Add spiced butter and simmer on low for about 5 minutes. Add ginger, garlic, and spices. Simmer for 5 to 8 minutes, adding water if it starts sticking to the pan.',
      'Add onion mixture to the lentils and simmer over low heat for about 10 minutes. Add water if necessary. It should have the consistency of a stew. Add salt to taste.',
    ],
    reviews: [
      {
        writer: 'Michelle',
        review:
          "I've never had flavors like this before, but they were so good!",
      },
    ],
  },
  {
    name: 'Jerk Chicken',
    country: 'Jamaica',
    publisher: {
      name: 'Julia Moskin',
      pic: 'https://static01.nyt.com/images/2014/04/24/dining/moskinCP/moskinCP-thumbLarge-v2.jpg',
      social: 'https://www.instagram.com/juliamoskin/?hl=en',
      bio: 'Julia Moskin, a lifelong New Yorker, has been a Food staff reporter since 2004. She was part of a New York Times team that earned the 2018 Pulitzer Prize for public service, for her reporting on sexual harassment in the restaurant industry. Her beat covers everything food-related: news, trends, creators and recipes. In 2020, her investigation of the Court of Master Sommeliers exposed sexual abuse at the highest levels of the wine world.',
    },
    images: [
      'https://static01.nyt.com/images/2014/02/20/dining/recipes-jerkchicken/recipes-jerkchicken-articleLarge.jpg',
      'https://theforkedspoon.com/wp-content/uploads/2019/05/Jerk-Chicken-and-Marinade-8.jpg',
      'https://sweetandsavorymeals.com/wp-content/uploads/2020/04/jamaican-jerk-chicken.jpg',
    ],
    time: '13:30',
    ratingsAverage: 5.0,
    ratingsQuantity: 710,
    tags: ['paleo', 'omnivore', 'caribbean'],
    servings: 8,
    ingredients: [
      '2 3 1/2- to 4-pound chickens, quartered, or 8 whole legs, or 5 to 6 pounds bone-in, skin-on thighs',
      '1 large bunch scallions (about 8), white and green parts',
      '2 shallots, peeled and halved',
      '4 to 6 Scotch bonnet chili peppers, stems removed, or habaneros',
      '1 2-inch piece fresh ginger, peeled and coarsely chopped',
      '6 garlic cloves, peeled',
      '¼ cup fresh thyme leaves, or 1 tablespoon dried',
      '2 tablespoons ground allspice, more for sprinkling',
      '2 tablespoons soy sauce',
      '2 tablespoons dark brown sugar',
      '1 tablespoon salt, more for sprinkling',
      '1 tablespoon black pepper',
      '½ cup vegetable oil',
      '1 tablespoon white or apple cider vinegar',
      'Freshly squeezed juice of 2 limes',
    ],
    preparation: [
      'At least 1 day before cooking, pat chicken dry with paper towels. Combine remaining ingredients in a blender or food processor and grind to a coarse paste. Slather all over chicken, including under skin. Refrigerate 12 to 36 hours. Bring to room temperature before cooking and lightly sprinkle with more salt and ground allspice.',
      'Prepare a charcoal grill: Clean and oil grates, and preheat to medium heat using one chimney of charcoal. The temperature can start as high as 300 degrees and go as low as 250. For best results, coals should be at least 12 inches away from chicken. If necessary, push coals to one side of grill to create indirect heat. Add two large handfuls of soaked pimento (allspice) wood sticks and chips (see note) or other aromatic wood chips to coals, then close grill. When thick white smoke billows from grill, place chicken on grate, skin side up, and cover. Let cook undisturbed for 30 to 35 minutes.',
      'Uncover grill. Chicken will be golden and mahogany in places. Chicken thighs may already be cooked through. For other cuts, turn chicken over and add more wood chips, and charcoal if needed. Cover and continue cooking, checking and turning every 10 minutes. Jerk chicken is done when skin is burnished brown and chicken juices are completely clear, with no pink near the bone. For large pieces, this can take up to an hour. Serve hot or warm, with rice and beans.',
    ],
    reviews: [
      {
        writer: 'Julie',
        review:
          "Fabulous, we've had people get up from the table and do little dances of spicey hot joy.",
      },
    ],
  },
  {
    name: 'Rice and Peas',
    country: 'Jamaica',
    publisher: {
      name: 'Jocelyn Delk Adams',
      social: 'https://www.instagram.com/grandbabycakes/?hl=en',
      bio: "ocelyn Delk Adams is the founder, author, national television personality and brand ambassador behind the award winning cookbook Grandbaby Cakes and the food website Grandbaby-Cakes.com, which gives her family’s, particularly her grandmother’s, cherished generational recipes her modern spin while preserving the most important ingredient- tradition. Jocelyn is a TODAY Show Tastemaker, a Food Network judge and was a cast member of one of the Cooking Channel’s longest running most popular shows, 'Unique Sweets.'In addition to being a regular on the TODAY Show, she has been featured on The Rachael Ray Show, Food Network’s The Kitchen, Dr. Oz, The Cooking Channel, ABC World News Now, Hallmark Channel, Better Homes and Gardens Magazine, O (The Oprah) Magazine, The Thanksgiving Day Parade on CBS, Essence Magazine, Huffington Post, Bon Appetit, Southern Living Magazine, and many others. She also recently gave a TED Talk in 2017 about Brand Authenticity and has been a top brand ambassador and writer for several top brands such as Wal-mart, Coca-Cola, Land O’ Lakes, Audi, James Beard Foundation, Pillsbury, State Farm, HomeGoods, McCormick and many more",
      pic: 'https://secure.gravatar.com/avatar/0469b017ca3273267cc1959831778182?s=600&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D600&r=G',
    },
    images: [
      'https://brooklynactivemama.com/wp-content/uploads/2017/06/Classic-Jamaican-Authentic-Rice-and-Peas-4665-720x405.jpg',
      'https://i2.wp.com/www.butterbeready.com/wp-content/uploads/2020/06/DK6A7102.jpg?fit=960%2C1440&ssl=1',
      'https://www.pikpng.com/pngl/m/597-5974197_jamaican-rice-and-peas-and-jerk-chicken-clipart.png',
    ],
    time: '2:00',
    ratingsAverage: 4.6,
    ratingsQuantity: 53,
    tags: ['caribbean', 'vegan', 'vegetarian'],
    servings: 8,
    ingredients: [
      '1 cup dried red kidney beans rinsed and drained',
      '6 1/2 cups low-sodium chicken stock',
      '2 cups uncooked parboiled rice, rinsed and drained',
      '1/4 cup grated Grace Pure Creamed Coconut',
      '3 fresh thyme sprigs',
      '1 habanero pepper',
      '1/2 tsp kosher salt',
      '1/4 tsp ground allspice',
    ],
    preparation: [
      'Put the beans and 4 cups of the stock in a medium dutch oven or saucepan and soak, covered, overnight.',
      'Bring the beans and stock to a full boil and boil for 15 minutes. Reduce the heat to medium-low and simmer the beans until tender, about 1 hr.',
      'Add the remaining 2 ½ cups sock and bring to a boil. Using a fork, stir in the rice, grated creamed coconut, thyme, habanero, salt and allspice and cover the pot with a tight-fitting lid. Reduce the heat to low and cook until the rice is tender, about 20 minutes. Turn off the heat and let stand, covered, for 5 minutes. Remove the thyme and habanero. Fluff the rice, separate the grains with a fork and serve.',
    ],
    reviews: [
      {
        writer: 'Lady Santana',
        review:
          'Amazing…. made this recipe 3 times counting today and shared it a few times to my peoples in the south who is missing the traditional Caribbean taste in NY.',
      },
      {
        writer: 'Sebas',
        review:
          'Authentic flavor!!!!!!!! Thank you. I have been looking for this flavor for years. The brown stew was also amazing. Both better than restaurants.',
      },
    ],
  },
  {
    name: 'Bolo de Ginguba',
    publisher: { name: 'Sharila' },
    images: [
      'https://bimbyworld.com/wp-content/uploads/bolo-de-ginguba.jpg',
      'https://i1.wp.com/thediasporicdish.com/wp-content/uploads/2021/03/image-2.jpg?fit=800%2C634&ssl=1',
      'https://i.ytimg.com/vi/uZE049BLMqk/maxresdefault.jpg',
    ],
    country: 'Angola',
    time: '1:00',
    ratingsAverage: 0,
    ratingsQuantity: 0,
    tags: ['vegetarian', 'south-african'],
    servings: 0,
    ingredients: [
      '250g of wheat flour',
      '300g of sugar',
      '150g of butter',
      '4 eggs',
      '2 cups (coffee) of milk',
      '1 teaspoon of yeast',
      '1 can of condensed milk',
      'Toasted ginguba qb',
    ],
    preparation: [
      'Beat the sugar and butter very well.',
      'Then add the eggs and beat.',
      'Finally add the milk and flour (the flour should already be mixed with the yeast) and beat well.',
      'Pour the dough into a greased and floured pan and place in the oven at medium temperature.',
      'When cooked, let it cool and unmold.',
      'In the meantime, place the condensed milk in a pot and stir until it turns brown. (be careful not to get caramel)',
      'Cover the cake with the condensed milk and cover with the crushed ginguba.',
      'In this recipe, I filled the cake with condensed milk and ginguba.',
    ],
    reviews: [{ writer: '', review: '' }],
  },
  {
    name: 'COUSCOUS',
    publisher: { name: 'Um Safia' },
    images: [
      'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_629,h_354/v1/img/feed/232404/ixddoCuVSOytFn9AzYuC_1503533676193222398628.jpg',
      'https://www.foodrepublic.com/wp-content/uploads/2013/01/tagine.jpeg',
      'https://www.thespruceeats.com/thmb/srX3IzQJI_XH-v2sbxltMnyPQs0=/2901x2176/smart/filters:no_upscale()/Couscous-Tfaya-1-3264-x-2176-56a644ad5f9b58b7d0e0c11a.jpg',
      'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/23/24/04/picPt37wd.jpg',
    ],
    time: '2:25',
    country: 'Algeria',
    ratingsAverage: 5,
    ratingsQuantity: 4,
    tags: ['north-african', 'omnivore'],
    servings: 8,
    ingredients: [
      '8 lamb chops or 8 skinless chicken pieces, on bone but skin & fat free if possible',
      '1 large onion',
      '3 garlic cloves',
      '2 medium carrots',
      '2 medium courgettes (zucchini)',
      '2 large potatoes',
      '1⁄4 swede or 1/4 turnip',
      '1 parsnip',
      '2-3 stalks celery (or khorchef)',
      '1 cup chickpeas, drained',
      '2 teaspoons ras el hanout spice mix',
      'salt & pepper',
      '1 pinch dried mint',
      '1⁄2 tablespoon sunflower oil or 1/2 tablespoon vegetable oil',
      '1 cup of tinned plum tomato, liquidised',
      '1 1⁄2 liters water',
      '1 large green chili pepper (the Algerian ones) (optional)',
      '500g medium couscous',
      '1 tablespoon ghee (smen)',
      '1 1⁄2 tablespoons margarine',
      '1 glass water',
      'olive oil',
    ],
    preparation: [
      'Finely chop the onion and mince the garlic & place it in a large heavy bottomed pan with the meat or chicken, ras el hanout & a little olive oil. Fry gently to seal the meat/chicken. I use my pressure cooker pr large cast iron casserole for this.',
      "Chop the carrot, parsnip and courgette into 6ths. Cut the potato into 1/4's and roughly chop the swede. Chop khourchef or celery into roughly same size as carrot. (Peel the carrots, potato, parsnip and swede).",
      'Add the vegetables to the meat along with 1L of water and turn up heat so they begin simmering. If using the chilli add it now, along with salt and pepper. If cooking in a regular pan then cook for 40 minutes like this. If using the pressure cooker as I do then 20 minutes will be enough.',
      "Add the tomatoes, chick peas and dried mint and 1/2L more water or enough to create a 'stew' consistency.",
      'Return to heat and cook in pan for further 30 minutes and if using pressure cooker then cook on med to high for a further 25 minutes.',
      "Take a 500g pack of medium couscous and pour into a gas'a if you have one. If not find the biggest bowl you have. Pick out any 'bits' and sprinkle water - about 50mls and a tsp of salt over the couscous and using your hand rub 1/2 tsp of oil through the couscous to stop it sticking. Fill a couscousier or steamer half full with the couscous (as it swells).",
      "When you 1st notice steam coming from the couscous, count 10 minutes. After that remove from the steamer, place in gas'a and use your hands to 'open' the couscous (rub it together between hands to remove clumps). This is very hot and you need to keep wetting you hand with cold water and sprinkling a little on the couscous.",
      'Return to steamer when thoroughly opened. Repeat process of steaming and opening twice more.',
      "Finally remove from steamer and place back in gas'a. Open for final time and rub a tbsp of ghee or smen into the couscous along with 2tsp of butter or margarine. Add salt to taste.",
      "Serve the couscous in the gas'a with sauce on top as traditional style or in tagine etc. Usually we place the meat/chicken in place - 1 for each guest and decorate the couscous with the veg before ladling some of the sauce over the top.",
    ],
    reviews: [
      {
        writer: 'Chef Beth',
        review:
          "This took along time and quite a bit of work. But it was WELL WORTH IT. I don't know if I'll ever do cous cous any different again. The leftover the next day were good also. Will look for more of these recipes.",
      },

      {
        writer: 'Christe Hatton Mihok',
        review:
          "This is the second time I made this, this time I added more mint and a bit of garam masala because I happen to like the flavor. I didn't use enough cous cous last time so I opted for more on this recipe and it seemed just right. We loved it!",
      },
    ],
  },
  {
    name: ' bobotie',
    publisher: { name: 'Sara Buenfeld' },
    images: [
      'https://www.panningtheglobe.com/wp-content/uploads/2013/02/bobotie11web.jpg',
      'https://www.thetastychilli.com/wp-content/uploads/2021/02/Bobotie-yellow-rice-tomato-sambal.jpg',
    ],
    time: '1:20',
    country: 'South African',
    ratingsAverage: 5.0,
    ratingsQuantity: 177,
    tags: ['south-african', 'omnivore'],
    servings: 6,
    ingredients: [
      '2 slices white bread',
      '2 onions, chopped',
      '25g butter',
      '2 garlic cloves, crushed',
      '1kg packet lean minced beef',
      '2 tbsp Madras curry paste',
      '1 tsp dried mixed herbs',
      '3 cloves',
      '5 allspice berries',
      '2 tbsp peach or mango chutney',
      '3 tbsp sultana',
      '6 bay leaves',
      'For the topping',
      '300ml full-cream milk',
      '2 large eggs',
    ],
    preparation: [
      'Heat oven to 180C/fan 160C/gas 4. Pour cold water over the bread and set aside to soak.',
      'Meanwhile, fry the onions in the butter, stirring regularly for 10 mins until they are soft and starting to colour. Add the garlic and beef and stir well, crushing the mince into fine grains until it changes colour. Stir in the curry paste, herbs, spices, chutney, sultanas and 2 of the bay leaves with 1 tsp salt and plenty of ground black pepper.',
      'Cover and simmer for 10 mins. Squeeze the water from the bread, then beat into the meat mixture until well blended. Tip into an oval ovenproof dish (23 x 33cm and about 5-6cm deep). Press the mixture down well and smooth the top. You can make this and chill 1 day ahead.',
      'For the topping, beat the milk and eggs with seasoning, then pour over the meat. Top with the remaining bay leaves and bake for 35-40 mins until the topping is set and starting to turn golden.',
    ],
    reviews: [
      {
        writer: 'bjconroy',
        review:
          'Really nice and very easy to make. Went down very well with the family only disappointment was that there were no seconds!',
      },
    ],
  },
  {
    name: 'Harira Recipe',
    publisher: {
      name: 'Suzy Karadsheh',
      social: 'https://www.instagram.com/themediterraneandish/',
      bio: 'In late 2014 I started The Mediterranean Dish as my personal food blog to showcase modern Mediterranean recipes and lifestyle. You will find recipes celebrating bold flavors from Southern Europe to North Africa, and the Middle East.  You will also find hundreds of Mediterranean diet recipes and other helpful resources on eating and living the Mediterranean way.',
      pic: 'https://www.themediterraneandish.com/wp-content/uploads/2020/02/suzy-karadsheh-the-mediterranean-dish-8.jpg',
    },
    images: [
      'https://www.themediterraneandish.com/wp-content/uploads/2021/01/harira-recipe-8-1024x1536.jpg',
      'https://www.themediterraneandish.com/wp-content/uploads/2021/01/harira-recipe-1-1024x683.jpg',
      'https://www.themediterraneandish.com/wp-content/uploads/2021/01/harira-recipe-2-1024x683.jpg',
    ],
    time: '1:00',
    country: 'Morocco',
    ratingsAverage: 4.9,
    ratingsQuantity: 52,
    tags: ['vegetarian', 'north-african', 'vegan'],
    servings: 6,
    ingredients: [
      'Extra virgin olive oil',
      '1 large yellow onion finely chopped',
      '2 celery stalks chopped',
      '1 carrot peeled and chopped',
      'Kosher salt',
      '4 garlic cloves minced',
      '1 ½ teaspoons black pepper',
      '1 ½ teaspoon turmeric',
      '1 teaspoon cumin',
      '½ teaspoon ground ginger',
      '½ teaspoon ground cinnamon',
      '½ teaspoon cayenne',
      '2 14- ounce cans crushed tomatoes',
      '3 tablespoons tomato paste',
      '1 cup packed chopped fresh cilantro',
      '1 cup green lentils, rinsed',
      '1 cup red lentils, rinsed',
      '1 14- ounce can chickpeas',
      '7 cups vegetable or chicken stock, preferably low-sodium',
      '¼ cup long grain rice, rinsed or ¼ cup broken vermicelli',
      'Lemon wedges, for serving',
    ],
    preparation: [
      'In a large Dutch Oven, heat 4 tbsp extra virgin olive oil over medium heat until shimmering. Add the onions, celery, and carrots. Season with kosher salt. Cook for 5 minutes, stirring regularly until softened.',
      'Add the garlic and spices and cook for a couple of 1 to 2 minutes, stirring regularly.',
      'Add the crushed tomatoes, tomato paste, cilantro, lentils (both green and red), and chickpeas. Add a dash more kosher salt and cook for 5 minutes, stirring.',
      'Add the broth and raise the heat. Bring to a boil for 5 minutes, then turn the heat to low. Cover and let simmer for 45 minutes or until the legumes are fully cooked and very tender (check occasionally and plan to add more stock or water. The soup will be thick, but it should not be too thick that you cannot pour it. Make sure to adjust the salt as you add more liquid.)',
      'Stir in the rice and cook for another 15 or until the rice is fully cooked.',
      'Serve with lemon wedges.',
    ],
    reviews: [
      {
        writer: 'Megan',
        review:
          'LOVED this one, especially with homemade pita. It had a great spice to it. I substituted parsley instead of cilantro, and it was super tasty!',
      },
      {
        writer: 'Moira',
        review: 'Delicious! Love your recipes Suzy. Thank you',
      },
      {
        writer: 'Patty',
        review:
          'This is so delicious! My hubby cannot tolerate any kind of heat, so I left out the cayenne and replaced it with smoked sweet paprika. I added more carrots and celery, but otherwise followed the recipe.',
      },
    ],
  },
  {
    name: 'Irio',
    country: 'kenya',
    publisher: {
      name: 'Lola Osinkolu',
      social: 'https://www.instagram.com/cheflolaskitchen/',
      bio: 'I’m the wife of one amazing man who, despite his busy schedule, takes his time to be the photographer and tech guy behind this blog. Plus, he’s my number one fan. I’m also the mom to three adorable kids, ten years and under, who love to dictate the meals I make (super busy momma!).',
      pic: 'https://cheflolaskitchen.com/wp-content/uploads/2019/10/Untitled-1-pmg.png.webp',
    },
    images: [
      'https://cheflolaskitchen.com/wp-content/uploads/2019/01/irio-45.jpg.webp',
      'https://i.pinimg.com/736x/59/dc/a2/59dca27f96efa1528c64a29184bc5839.jpg',
      'https://miriammalaquias.files.wordpress.com/2019/05/irio-e1558537701438.jpg',
    ],
    time: '0:30',
    ratingsAverage: 5.0,
    ratingsQuantity: 4,
    tags: ['vegetarian', 'south-african'],
    servings: 5,
    ingredients: [
      '2-1/2 pounds potatoes',
      '1-1/2  cups  green peas',
      '1-1/2 Cups corn',
      '2 Tbsp Butter',
      'salt and pepper to taste',
    ],
    preparation: [
      'Peel the potatoes and cut each into four',
      'Put the potatoes, Peas, and corn in a large pot and add enough water to almost cover the potatoes.',
      'Leave to simmer for 15 to 20 minutes or till the potatoes are tender',
      "Drain the excess water (if there's any) but leave a bit inside the pot for easy mashing.",
      "Season with salt and black pepper and mash with a fork, wooden spoon or potato masher 'until all potatoes are nicely mashed.",
      'Add butter and stir together. Serve hot.',
    ],
    reviews: [
      {
        writer: 'Supriya Kutty',
        review:
          'It’s really looking so healthy and so delicious. I have never tried potatoes in such a way. This dish is really unique and very interesting. I will definitely try this recipe at home and I will let you know. Thank you so much for sharing the recipe. Keep Sharing.',
      },
    ],
  },
  {
    name: 'Fried plantains',
    publisher: {
      name: 'Lola Osinkolu',
      social: 'https://www.instagram.com/cheflolaskitchen/',
      bio: 'I’m the wife of one amazing man who, despite his busy schedule, takes his time to be the photographer and tech guy behind this blog. Plus, he’s my number one fan. I’m also the mom to three adorable kids, ten years and under, who love to dictate the meals I make (super busy momma!).',
      pic: 'https://cheflolaskitchen.com/wp-content/uploads/2019/10/Untitled-1-pmg.png.webp',
    },
    images: [
      'https://recipesfromapantry.com/wp-content/uploads/2013/01/Fried-plantains-38.jpg',
      'http://gfb.global.ssl.fastly.net/wp-content/uploads/2018/07/plantain.jpg',
    ],
    time: '0:15',
    ratingsAverage: 5,
    country: 'Nigeria',
    ratingsQuantity: 3,
    tags: ['west-african', 'caribbean', 'vegan', 'vegetarian'],
    servings: 6,
    ingredients: ['3 plantains ripe', 'Salt to taste', '2 cups Oil'],
    preparation: [
      'Cut the ends of the plantains off and off the skin. slice on the bias into about 1/4 to 1/2 inch thickness. Season with salt and mix together.',
      'Heat the Oil in a medium pan over medium to high heat.',
      "Carefully add the plantain inside the oil in a single layer (don't overcrowd the Oil).",
      'Fry the first side for about 3 to 4 minutes. Then flip to the other side and fry for another 3 to 5 minutes or till both sides are golden brown.',
      'Remove the plantains from the oil and transfer them to a colander.',
      'Repeat with the remaining plantains if you have more and Serve hot!',
    ],
    reviews: [{ writer: '', review: '' }],
  },
  {
    name: 'Seafood Okra',
    publisher: { name: 'Kemi' },
    images: [
      'https://guardian.ng/wp-content/uploads/2018/08/Seafood-okra.-Photo-FoodAce-e1534093097400.jpg',
      'https://foodlandfairydotcom.files.wordpress.com/2017/04/img_20170411_162303_5861.jpg?w=720',
      'https://pbs.twimg.com/media/DovdUZCW0AEet2N.jpg',
    ],
    time: '0:30',
    ratingsAverage: 0,
    ratingsQuantity: 0,
    country: 'Nigeria',
    tags: ['west-african', 'pescatarian'],
    servings: 4,
    ingredients: [
      '25 pieces medium sized Fresh Okro (lady fingers)',
      '2 Stock cubes',
      '1 cooking spoon Palm oil',
      '1 tablespoon Ground pepper',
      '3-4 Yellow Scotch bonnet',
      '¼ cup Ground Crayfish',
      '200g Prawns deveined , cleaned',
      'Stock fish',
      '1 whole Mackerel or Hake fish cut, cleaned',
      'Crab, squids, Shrimps, mussels (cleaned)',
      '1 cup Vegetable -Ugu or spinach',
      'Salt to taste.',
    ],
    preparation: [
      'Wash the Okro and grate or blend into small cubes. If blending, be careful not to use too much water.',
      'In a pot, add about 2 cups of water, add in the fish, stock cubes, pepper, palmoil, iru and salt',
      'Leave to cook for 5-10 minutes then add crayfish, Crab, squids, shrimps and leave to cook for another 5 minutes.',
      'Take out the fish from the sauce.',
      'Don’t worry this will be introduced back into the pot. Reason is not to scatter the tender fish.',
      'Now add the grated or blended okro and Ugu leaves.',
      'Do not cover pot after okro has been introduced into the pot. If you do then okro won’t keep it’s resilience.',
      'Taste for salt and seasoning, adjust accordingly, reduce the heat and let simmer for 3 minutes.',
      'The retained heat keeps cooking the Okro for about another 2 minutes after you take off heat so be careful not to overcook.',
      'Serve and enjoy with swallow of choice.',
    ],
    reviews: [{ writer: '', review: '' }],
  },
  {
    name: 'Cow Feet',
    publisher: {
      name: 'Christine Benlafquih',
      pic: 'https://www.thespruceeats.com/thmb/5rwyVCL1NJZLxlqbBtY0jpqHgHM=/400x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/christine-benlafquih-bw-f78cf1bfb7a349d79c808682bfd684bb.jpg',
      bio: 'Christine is an editor and writer with a special interest in covering food, multicultural issues, and religion. As a home cook, she writes extensively about Moroccan cuisine and has developed hundreds of recipes. She offers Moroccan cooking classes and culinary tours in Casablanca, Morocco. Christine has been cooking Moroccan dishes for family, friends, and guests for more than 20 years. For almost as long, she has been sharing the recipes and skills taught to her by Moroccan friends and in-laws who cook primarily from memory and have an intuitive sense of seasoning. These women patiently slowed down countless meal preparations so that she could take notes and write recipes. She continues to learn new things from some of the finest teachers around—the skilled women who prepare Moroccan cuisine daily.',
    },
    country: 'Morocco',
    images: [
      'https://tastymorocco909421219.files.wordpress.com/2020/11/img_20201117_182506-e1605698699265.jpg?w=1046',
      'https://tastymorocco909421219.files.wordpress.com/2020/11/img_20201117_182506-e1605698699265.jpg?w=1046',
      'https://www.thespruceeats.com/thmb/nXcbPzYqkSZb0_Hgv-jbg-R_mzE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hergma-3128-x-2346-56a645f33df78cf7728c322b.jpg',
    ],
    time: '5:05',
    ratingsAverage: 4,
    ratingsQuantity: 8,
    tags: ['north-african', 'omnivore'],
    servings: 4,
    ingredients: [
      '2 calves feet, cut into pieces (or 8 lamb feet)',
      '2 large onions, chopped',
      '1 large onion, sliced',
      '6 to 8 cloves of garlic, finely chopped',
      '2 or 3 small pieces (2 to 3 inches) of cinnamon stick',
      '4 teaspoons salt',
      '3 teaspoons ground ginger',
      '2 teaspoons black pepper',
      '1 1/2 teaspoons paprika',
      '1 teaspoon cumin',
      '1 teaspoon saffron threads, crumbled',
      '1 teaspoon turmeric',
      '1 teaspoon smen, or to taste',
      '1/2 cup olive oil',
      '3/4 cup (125 g) dried chickpeas',
      '1 1/2 cups wheat kernels (wheat berries)',
      '1/4 cup golden or dark golden raisins',
    ],
    preparation: [
      'The night before, soak the dried chickpeas in a generous amount of cold water.',
      'When ready to begin cooking preparations, set aside the raisins and wheat kernels to soak in separate bowls of cold water.',
      'Wash and clean the feet carefully. The hooves can be discarded. Also, remove any loose bone fragments. Wash the feet a final time by immersing them in water.',
      'Put the feet in a deep pressure cooker or heavy-bottomed pot along with the onions, garlic, spices, smen and oil. Add enough water to come almost to the top of the meat, cover, and bring to a simmer.',
      'Cook the meat for 1 1/2 hours with medium pressure (or 3 hours if simmering in a conventional pot). Stir and taste for salt, adding more if desired.',
      "Drain the chickpeas and add them directly to the pot. Drain the wheat kernels, wrap and tie them in a piece of cheesecloth, and add them to the pot as well. (Note: If you don't have cheesecloth, the wheat can be added directly to the pot. The advantage of the cheesecloth is that it allows you to create a nicer presentation at serving time.)",
      "Cover and continue cooking with medium-low pressure for another 2 1/2 hours (or simmer in a conventional pot for 5 hours – occasionally check on the level of the liquids), until the wheat is tender. You'll need to retrieve the cheesecloth to sample a wheat berry to see if it's cooked to your liking.",
      'Drain the raisins and add them to the pot. Cover and continue cooking without pressure to reduce the liquids to a thick sauce.',
      'To serve, arrange the meat in the center of a large platter and distribute the sauce, chickpeas, and raisins all around. Untie the cheesecloth and arrange the wheat on top of the meat.',
    ],
    reviews: [{ writer: '', review: '' }],
  },
  {
    name: 'Chicken Tagine',
    publisher: {
      name: 'Christine Benlafquih',
      pic: 'https://www.thespruceeats.com/thmb/5rwyVCL1NJZLxlqbBtY0jpqHgHM=/400x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/christine-benlafquih-bw-f78cf1bfb7a349d79c808682bfd684bb.jpg',
      bio: 'Christine is an editor and writer with a special interest in covering food, multicultural issues, and religion. As a home cook, she writes extensively about Moroccan cuisine and has developed hundreds of recipes. She offers Moroccan cooking classes and culinary tours in Casablanca, Morocco. Christine has been cooking Moroccan dishes for family, friends, and guests for more than 20 years. For almost as long, she has been sharing the recipes and skills taught to her by Moroccan friends and in-laws who cook primarily from memory and have an intuitive sense of seasoning. These women patiently slowed down countless meal preparations so that she could take notes and write recipes. She continues to learn new things from some of the finest teachers around—the skilled women who prepare Moroccan cuisine daily.',
    },
    country: 'Morocco',
    images: [
      'https://www.thespruceeats.com/thmb/4udIWNlMjLq3koqORaEnI4vUSDA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-tagine-with-chickpeas-and-raisins-2394713-hero-01-84b97e37f06846e696167d28c9f32996.jpg',
      'https://www.thespruceeats.com/thmb/T4zQM8zrp-o84mUz00-hX2JOSwQ=/1773x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-tagine-with-chickpeas-and-raisins-2394713-step-01-b3ff554f0f34440b8535b45b5a90efac.jpg',
      'https://www.thespruceeats.com/thmb/9orgf6rhHRhq8j0eY_UxNxM-eNY=/1237x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-tagine-with-chickpeas-and-raisins-2394713-step-02-1409d4557b1140dfb7f534947a526505.jpg',
      'https://www.thespruceeats.com/thmb/9dO0MESC_F-HNGSHCDktwfyzCBc=/1237x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-tagine-with-chickpeas-and-raisins-2394713-step-03-1e80cf8ea3914906adce92f7dcd22a95.jpg',
      'https://www.thespruceeats.com/thmb/27kUF5fMa6E8N8ZoURI1qb0kBec=/1237x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-tagine-with-chickpeas-and-raisins-2394713-step-04-b055d017680b48a5bb9716f5dd50b065.jpg',
      'https://www.thespruceeats.com/thmb/1P673ikMyjZzmP5QU5JzmPr0a3s=/1237x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-tagine-with-chickpeas-and-raisins-2394713-step-05-d5b5c0095a9f4958a40bf3f703779c3a.jpg',
      'https://www.thespruceeats.com/thmb/KMzTUgXxuXts_PzeXOycKG29OI8=/1237x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-tagine-with-chickpeas-and-raisins-2394713-step-06-550421b1cf4a4191999d2c0959aaaa63.jpg',
    ],
    time: '1:30',
    ratingsAverage: 4.5,
    ratingsQuantity: 56,
    tags: ['north-african', 'omnivore'],
    servings: 4,
    ingredients: [
      '1 chicken (skin removed and cut into pieces)',
      '2 onions (1 chopped, 1 sliced)',
      '3 cloves garlic (finely chopped or pressed)',
      '2 tablespoons​ olive oil',
      '2 tablespoons butter',
      '1 1/2 teaspoons salt (or to taste)',
      '1 1/2 teaspoons​ Ras El Hanout',
      '1 teaspoon turmeric',
      '1/4 teaspoon black pepper',
      '1/4 teaspoon cayenne pepper (or to taste)',
      '1/4 teaspoon saffron threads (crumbled)',
      '1 cinnamon stick',
      '3 tomatoes (peeled and chopped)',
      '2 tablespoons cilantro (chopped), plus more for garnish',
      '2 tablespoons parsley (chopped)',
      '1/3 cup/50 grams golden raisins',
      '15 ounces/425 grams chickpeas (cooked or canned)',
      '2 to 3 tablespoons honey',
      'Optional: 1/2 teaspoon ground cinnamon',
    ],
    preparation: [
      'In a heavy-bottomed pot, mix the chicken, onions, garlic, oil, butter, and all of the spices. Cover and cook over medium heat, occasionally stirring, for 15 to 20 minutes.',
      'Add the tomatoes, cilantro, and parsley. Cover and continue cooking over medium heat, occasionally stirring, for another 20 minutes. A rich sauce should form. Adjust the heat if necessary to keep the chicken from sticking to the bottom of the pot.',
      'Add the raisins, chickpeas, honey, and ground cinnamon (if using) to the pot, along with enough water to cover the chickpeas.',
      'Continue cooking for another 10 to 15 minutes, or until the sauce is quite thick and the chicken is very tender.',
      'Transfer to a serving platter, and if desired garnish with a sprinkling of freshly chopped cilantro.',
    ],
    reviews: [
      {
        writer: 'Sally miller',
        review:
          'This is some of the best flavors I have EVER put in my mouth! Only one question: Where in the recipe is ginger mentioned (other than the description?) Regardless, even without ginger, still hands down enough to make you slap yourself.',
      },
    ],
  },
  {
    name: 'Okra Tagine',
    publisher: {
      name: 'Christine Benlafquih',
      pic: 'https://www.thespruceeats.com/thmb/5rwyVCL1NJZLxlqbBtY0jpqHgHM=/400x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/christine-benlafquih-bw-f78cf1bfb7a349d79c808682bfd684bb.jpg',
      bio: 'Christine is an editor and writer with a special interest in covering food, multicultural issues, and religion. As a home cook, she writes extensively about Moroccan cuisine and has developed hundreds of recipes. She offers Moroccan cooking classes and culinary tours in Casablanca, Morocco. Christine has been cooking Moroccan dishes for family, friends, and guests for more than 20 years. For almost as long, she has been sharing the recipes and skills taught to her by Moroccan friends and in-laws who cook primarily from memory and have an intuitive sense of seasoning. These women patiently slowed down countless meal preparations so that she could take notes and write recipes. She continues to learn new things from some of the finest teachers around—the skilled women who prepare Moroccan cuisine daily.',
    },
    country: 'Morocco',
    images: [
      'https://www.thespruceeats.com/thmb/9QAmeG2HOudcZiSmmTG2UokUN-E=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/okra-zucchini-tagine-vertical-57c501713df78cc16e1be545.jpg',
      'https://i.pinimg.com/originals/a6/87/a8/a687a89145ca601ea5cc1761c61d3a8c.jpg',
    ],
    time: '1:40',
    ratingsAverage: 5,
    ratingsQuantity: 5,
    tags: ['north-african', 'omnivore', 'paleo'],
    servings: 4,
    ingredients: [
      '1 lb. (about 500 g) lamb (or beef, cut into 3-inch pieces)',
      '1 lb. okra (fresh, trimmed and soaked; directions below)',
      '1 lb. fresh zucchini (partially pared lengthwise)',
      '1/3 cup vegetable (or olive oil; part butter, if desired)',
      '4 large (or 6 medium) tomatoes (ripe)',
      '1 large onion (chopped medium)',
      '5 to 6 cloves garlic (finely chopped or minced)',
      '2 tablespoons cilantro (chopped fresh)',
      '2 tablespoons parsley (chopped fresh)',
      '1 tablespoon ginger',
      '2 teaspoons salt, or to taste',
      '1 teaspoon pepper',
      '1 teaspoon turmeric',
      'Pinch of saffron threads (crumbled)',
      '1 cup vinegar (for soaking the okra)',
    ],
    preparation: [
      'Trim the stem and tip from each okra pod. Remove fuzz from older, larger pods by gently scrubbing under running water. Wash and drain the okra, then place in a bowl and cover with one cup of water and one cup of vinegar. Set aside to soak for 30 to 60 minutes. Drain and pat dry thoroughly when ready to use. ',
      'Trim the stem from each zucchini and partially pare by peeling several thin strips from the length of the zucchini, creating a striped effect. Smaller zucchini may be left whole; larger zucchini may be cut in half lengthwise. Set aside until ready to use. ',
      'Peel, seed and finely chop the tomatoes or seed and grate them. Set aside.',
      'Over medium heat, brown the meat, onion, garlic, oil and spices in a large pot or pressure cooker.',
      'Add the tomatoes, parsley and cilantro. Cover and simmer for 10 to 15 minutes.',
      'Add 2 1/2 cups  to 3 cups of water. Increase the heat and bring to a boil. If using a pot, cover, reduce heat and simmer for 60 to 90 minutes, until the meat is nearly done. If using a pressure cooker, cover and cook with pressure for about 30 minutes.',
      'Interrupt the cooking to add the okra (and a little water if necessary). Cover and bring back to a simmer for about 20 minutes (or bring back to pressure for about 10 minutes), until the okra is tender but still holds its shape.',
      'Add the zucchini and continue simmering, partially covered, until tender.',
      'Reduce the sauce until thick. Arrange on a serving platter or tagine and serve.',
    ],
    reviews: [{ writer: '', review: '' }],
  },
  {
    name: 'Yoruba Style Ofada',
    publisher: {
      name: 'Ronke Edoho',
      bio: 'Ronke Edoho is the Founder and Creative administrator for the popular Nigerian Food Blog 9jafoodie.com. Ronke started the blog to educate the world on Nigerian food as well as find modern ways to present traditional recipes. She is a certified Clinical weight loss specialist and author of the cookbook Lose It Nigerian. Her cookbook focuses on healthy modification to traditional Nigerian recipes for people who are interested in eating clean and or losing weight. Born and raised in Nigeria, Ronke has lived in Canada for over eleven years. Ronke spends her spare time creating content for the 9jafoodie blog as well as building relationships with her socia medial followers.',
      pic: 'https://loseitnigerian.com/wp-content/uploads/2020/04/Ronke-Edoho-LIN-200x300.jpg',
      social: 'https://www.instagram.com/9jafoodie/?hl=en',
    },
    images: ['https://9jafoodie.com/wp-content/uploads/2020/05/Ata-Rice-2.jpg'],
    time: '0:50',
    country: 'Nigeria',
    ratingsAverage: 0,
    ratingsQuantity: 0,
    tags: ['west-african', 'omnivore'],
    servings: 4,
    ingredients: [
      '2-4 hot peppers',
      '8 large red bell peppers (tatashe)',
      '3 large onions',
      '2-3 cups palm oil (divide)',
      '1 cup chopped onion',
      'Precooked meat and boiled eggs – To taste',
      '1/2 cup crayfish',
      'Salt and maggi cube – to taste',
    ],
    preparation: [
      'Combine peppers and onion in a blender. Process into a coarse texture.',
      'Pour processed peppers into a strainer, set aside to drain out excess liquid',
      'Set a large pot on medium-high heat, heat up half of the oil. Add in chopped onion and cooked meat. Cook until meat is browned.',
      'Add in the processed pepper. Cook for 10 minutes',
      'Add in crayfish, salt and maggi and some broth or water. Add in extra meat (egg, shaki etc). Cover the pot and leave to cook for 25mins',
      'Add in left over oil and continue to cook until oil floats to the top or the spirit of your ancestors whisper to you that the sauce is ready.',
      'Skim off any excess oil',
    ],
    reviews: [{ writer: '', review: '' }],
  },
  {
    name: 'Egusi Soup',
    publisher: {
      name: 'Ronke Edoho',
      bio: 'Ronke Edoho is the Founder and Creative administrator for the popular Nigerian Food Blog 9jafoodie.com. Ronke started the blog to educate the world on Nigerian food as well as find modern ways to present traditional recipes. She is a certified Clinical weight loss specialist and author of the cookbook Lose It Nigerian. Her cookbook focuses on healthy modification to traditional Nigerian recipes for people who are interested in eating clean and or losing weight. Born and raised in Nigeria, Ronke has lived in Canada for over eleven years. Ronke spends her spare time creating content for the 9jafoodie blog as well as building relationships with her socia medial followers.',
      pic: 'https://loseitnigerian.com/wp-content/uploads/2020/04/Ronke-Edoho-LIN-200x300.jpg',
      social: 'https://www.instagram.com/9jafoodie/?hl=en',
    },
    images: [
      'https://9jafoodie.com/wp-content/uploads/2012/03/NIGERIAN-egusi-soup-recipe-lumpy-600x398.jpg',
      'https://9jafoodie.com/wp-content/uploads/2012/02/egusi-soup-ingredients1.jpg',
      'https://9jafoodie.com/wp-content/uploads/2012/02/DSC07140.jpg',
    ],
    time: '1:00',
    country: 'Nigeria',
    ratingsAverage: 0,
    ratingsQuantity: 0,
    tags: ['west-african', 'omnivore'],
    servings: 4,
    ingredients: [
      '1/4 cup groundnut oil*',
      '1 cooking spoon palm oil',
      '1 cup ground egusi',
      '1 cup chopped spinach',
      '1/2 cup pepper sauce',
      '2 bouillon cubes (Maggi)',
      '1 tablespoon crayfish powder',
      '1 teaspoon salt (to taste)',
      '1 tablespoon locust beans',
      '1/4 cup ede (Dried shrimps) (Optional)',
      'Precooked meat and fish – choice quantity',
    ],
    preparation: [
      'Combine  the egusi with 2 table spoons of water, mix until you have a thick paste',
      'Set a medium sized pot on medium heat, add in the groundnut oil. With a teaspoon, ball up the egusi mixture and drop into the oil. fry for 3 minutes.',
      'Add 1.5 (one and half) cups of water into the fried egusi, cover and bring to a rolling boil.',
      'Add other ingredients apart from chopped vegetable. Cover and simmer on medium heat for 10-12mins.',
      'Stir the egusi carefully, taste and adjust for salt. Add in the vegetable. simmer for another 3 minutes.',
      'Serve your egusi with Amala, Eba, White rice or pounded Yam. Enjoy!!!',
    ],
    reviews: [{ writer: '', review: '' }],
  },
  {
    name: 'Catfish pepper soup',
    country: 'Nigeria',
    ratingsAverage: 5,
    ratingsQuantity: 4,
    servings: 4,
    time: '0:35',
    images: [
      'https://www.myactivekitchen.com/wp-content/uploads/2015/05/catfish-pepper-soup-image_4.jpg',
      'https://www.myactivekitchen.com/wp-content/uploads/2015/05/catfish-pepper-soup-image_8.jpg',
      'https://www.myactivekitchen.com/wp-content/uploads/2015/05/catfish-pepper-soup-image.jpg',
      'https://www.myactivekitchen.com/wp-content/uploads/2015/05/catfish-pepper-soup-4.jpg',
    ],
    tags: ['west-african', 'pescatarian', 'omnivore', 'paleo'],
    publisher: {
      name: 'Ajoke',
      pic: 'https://www.myactivekitchen.com/wp-content/uploads/2018/12/LRM_EXPORT_361136269360636_20181230_132551041-e1546280860819.jpeg',
      bio: 'I am a  passionate home cook, nothing pretentious at all, what you see is what you get. I hope you enjoy the journey as much as I do',
      social: 'https://www.instagram.com/myactivekitchen/',
    },
    ingredients: [
      '4-8 Catfish steaks',
      'i tbsp Cayenne pepper',
      '2 tbsp Vegetable oil',
      '2 tbsp Pepper soup spice mix (home-made/shop bought)',
      'Seasoning cubes or powder (I used Nigerian Knorr cubes) substitute with beef bouillon or chicken powder',
      'Salt (use according to preference) start with ½ tsp and adjust to preference',
      '1 tsp Fresh garlic, peeled and sliced',
      '1 tsp Fresh ginger, peeled and chopped',
      '1 small Onion, chopped',
      '1 Fresh tomato, sliced',
      '1/3 cup Lime or lemon juice',
      '1/2 cup Chopped basil or scent leaves (efirin)',
      '2-3 Large potatoes, peeled and cut in chunks (substitute with yam or plantain)',
      'Water',
    ],
    preparation: [
      'Wash, clean and gut fish with lime/lemon juice to get rid of the sliminess. Sprinkle with some salt to season and set aside. Also prep the other ingredients too',
      'Place a pan on medium heat, add about 1 litre of water, pepper soup mix, cayenne pepper, garlic, ginger, onions, seasoning, vegetable oil and bring to boil, this should be around 5 minutes. Add potatoes chunks or yam and continue to boil till potato/yam is about 70% done.',
      'If you would be using plantain, add it when you add the fish as it cooks in under 10 minutes. You don’t want it to be overcooked',
      'Add catfish pieces to the sauce and cook for another 5 minutes. Check for salt and seasoning.',
      'Add sliced tomatoes and chopped basil and cook for another 5 minutes. Do not overcook the fish and stir gently to avoid breaking the fish.',
      'Serve hot or warm and enjoy.',
    ],
  },
];

const themes = [
  {
    theme: 'dark',
    background: '#1f2123;',
    textColor: 'white',
    brand: 'darkLogo',
  },
  {
    theme: 'white',
    background: 'whitelink',
    textColor: 'black',
    brand: 'whiteLogo',
  },
];

const region = [
  {
    name: 'West Africa',
    id: 'west-african',
    img: 'https://cheflolaskitchen.com/wp-content/uploads/2019/12/DSC0276-okro-pepper-soup-500x500.jpg',
  },
  {
    name: 'North Africa',
    id: 'north-african',
    img: 'http://res.cloudinary.com/dsmafmqwi/image/upload/v1615494093/virtualtrips/tours/muvfwdbjfsmbrxpwcmgz.jpg',
  },
  {
    name: 'South Africa',
    id: 'south-african',
    img: 'https://www.thespruceeats.com/thmb/vhj9QlZ3qIhlWw0ps_dd4khR3rM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bobotie-and-yellow-rice--south-african-cuisine--805248010-5ac23a47ae9ab800377f96a0.jpg',
  },
  {
    name: 'Caribbean',
    id: 'caribbean',
    img: 'https://legacy.travelnoire.com/wp-content/uploads/2019/03/48374641_2678424255508970_4701473533815947264_n.jpg',
  },
  {
    name: 'East Africa',
    id: 'east-african',
    img: 'https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2013/07/east-african-food.jpg',
  },
];

const diet = [
  {
    name: 'Omnivore',
    id: 'omnivore',
    img: 'https://kuulpeeps.com/wp-content/uploads/2020/09/EC060CF3-15E6-41E6-9C34-5975ADC10042.jpeg',
  },
  {
    name: 'Pescetarian',
    id: 'pescetarian',
    img: 'https://rstda.org/wp-content/uploads/2020/03/images-2020-03-22T230304.620.jpeg',
  },
  {
    name: 'Vegetarian',
    id: 'vegetarian',
    img: 'https://cdn.vox-cdn.com/thumbor/xhU-iXNOxbZ2Pcq0PZ6OiQu3QRI=/0x135:602x587/1400x1400/filters:focal(0x135:602x587):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/47205638/adey_abeba.0.0.png',
  },
  {
    name: 'Vegan',
    id: 'vegan',
    img: 'https://images.squarespace-cdn.com/content/v1/542a1eece4b07e544a693b04/1524026741164-JFIZ17PUEZK8SCMEAVFP/ke17ZwdGBToddI8pDm48kOQ3RhYac-aNSkiHO0RlES1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxZY5_tqj_k7S_qX7Glx3bDyE9LkMUO-anM9bzUgQ0GyPNTvk9QNqtpuBq74DSlQQ0/image-asset.jpeg?format=750w',
  },
];

module.exports = { recipes, region, diet };

},{}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["2C6uN","1hp6y"], "1hp6y", "parcelRequire8eee")

//# sourceMappingURL=index.9e8dcc19.js.map

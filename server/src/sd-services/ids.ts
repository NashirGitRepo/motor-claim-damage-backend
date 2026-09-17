// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import { dirname } from 'path'; //_splitter_
import * as url from 'url'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_hz7cJCqjR9gSYI7N from './idsutil'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class ids {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_ids_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_ctSUES7xIpWzZKVA(bh, parentSpanInst);
          //appendnew_next_sd_vKs2AWCaZqz2wc8a
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vKs2AWCaZqz2wc8a');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_5tW5SXBNPugfpOEr(bh, parentSpanInst);
          //appendnew_next_sd_ZBUlKYKq9ipVDVov
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ZBUlKYKq9ipVDVov');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_r1hCo4BLBE9nzPZM(bh, parentSpanInst);
          //appendnew_next_sd_703HonYlrXoT6gxO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_703HonYlrXoT6gxO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_3Wd4oXpBNtUL2mu3(bh, parentSpanInst);
          //appendnew_next_sd_ngZ3fcCpRhW9MaHe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ngZ3fcCpRhW9MaHe');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_He4HYrFuNzVqpYNM(bh, parentSpanInst);
          //appendnew_next_sd_8iSMwHc1Xxq6WX7p
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8iSMwHc1Xxq6WX7p');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_bR6FjmWNZRIxpPpa(bh, parentSpanInst);
          //appendnew_next_sd_gFG1KPPbvAVvUWV9
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gFG1KPPbvAVvUWV9');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_6jtL0FzDDb1yYjcl(bh, parentSpanInst);
          //appendnew_next_sd_VIX0ScIIXNhpX5nP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VIX0ScIIXNhpX5nP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_r1hCo4BLBE9nzPZM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r1hCo4BLBE9nzPZM',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qTacOGyAvepXWwLh(bh, parentSpanInst);
      //appendnew_next_sd_r1hCo4BLBE9nzPZM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r1hCo4BLBE9nzPZM',
        spanInst,
        'sd_r1hCo4BLBE9nzPZM'
      );
    }
  }

  async sd_qTacOGyAvepXWwLh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qTacOGyAvepXWwLh',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_sQLQxykoq135frCD(bh, parentSpanInst);
      } else {
        bh = await this.sd_FbdnhXssVUPRTwwp(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qTacOGyAvepXWwLh',
        spanInst,
        'sd_qTacOGyAvepXWwLh'
      );
    }
  }

  async sd_sQLQxykoq135frCD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sQLQxykoq135frCD',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_n4t7bSO0294xRSCE(bh, parentSpanInst);
      //appendnew_next_sd_sQLQxykoq135frCD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sQLQxykoq135frCD',
        spanInst,
        'sd_sQLQxykoq135frCD'
      );
    }
  }

  async sd_n4t7bSO0294xRSCE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_n4t7bSO0294xRSCE',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lFAtwjLVDTIix7jZ(bh, parentSpanInst);
      //appendnew_next_sd_n4t7bSO0294xRSCE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n4t7bSO0294xRSCE',
        spanInst,
        'sd_n4t7bSO0294xRSCE'
      );
    }
  }

  async sd_lFAtwjLVDTIix7jZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lFAtwjLVDTIix7jZ',
      parentSpanInst
    );
    try {
      const sd_hz7cJCqjR9gSYI7NInstance: sd_hz7cJCqjR9gSYI7N.idsutil =
        sd_hz7cJCqjR9gSYI7N.idsutil.getInstance();
      let outputVariables =
        await sd_hz7cJCqjR9gSYI7NInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wIvYW2Qq6f2H3gAm(bh, parentSpanInst);
      //appendnew_next_sd_lFAtwjLVDTIix7jZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lFAtwjLVDTIix7jZ',
        spanInst,
        'sd_lFAtwjLVDTIix7jZ'
      );
    }
  }

  async sd_wIvYW2Qq6f2H3gAm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wIvYW2Qq6f2H3gAm',
      parentSpanInst
    );
    try {
      const sd_hz7cJCqjR9gSYI7NInstance: sd_hz7cJCqjR9gSYI7N.idsutil =
        sd_hz7cJCqjR9gSYI7N.idsutil.getInstance();
      let outputVariables =
        await sd_hz7cJCqjR9gSYI7NInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ErqTxRDTjrPwKfHZ(bh, parentSpanInst);
      //appendnew_next_sd_wIvYW2Qq6f2H3gAm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wIvYW2Qq6f2H3gAm',
        spanInst,
        'sd_wIvYW2Qq6f2H3gAm'
      );
    }
  }

  async sd_ErqTxRDTjrPwKfHZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ErqTxRDTjrPwKfHZ',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_U9jP89QJuFksnKlV(bh, parentSpanInst);
      //appendnew_next_sd_ErqTxRDTjrPwKfHZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ErqTxRDTjrPwKfHZ',
        spanInst,
        'sd_ErqTxRDTjrPwKfHZ'
      );
    }
  }

  async sd_U9jP89QJuFksnKlV(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U9jP89QJuFksnKlV');
    }
  }

  async sd_FbdnhXssVUPRTwwp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FbdnhXssVUPRTwwp',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gYyXtbg2P7jEGROP(bh, parentSpanInst);
      //appendnew_next_sd_FbdnhXssVUPRTwwp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FbdnhXssVUPRTwwp',
        spanInst,
        'sd_FbdnhXssVUPRTwwp'
      );
    }
  }

  async sd_gYyXtbg2P7jEGROP(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gYyXtbg2P7jEGROP');
    }
  }

  async sd_ctSUES7xIpWzZKVA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ctSUES7xIpWzZKVA',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_N4AkpJdiEAPXV6sv(bh, parentSpanInst);
      //appendnew_next_sd_ctSUES7xIpWzZKVA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ctSUES7xIpWzZKVA',
        spanInst,
        'sd_ctSUES7xIpWzZKVA'
      );
    }
  }

  async sd_N4AkpJdiEAPXV6sv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N4AkpJdiEAPXV6sv',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N4AkpJdiEAPXV6sv',
        spanInst,
        'sd_N4AkpJdiEAPXV6sv'
      );
    }
  }

  async sd_3Wd4oXpBNtUL2mu3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3Wd4oXpBNtUL2mu3',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ffRJaKXLTzEZVD2d(bh, parentSpanInst);
      //appendnew_next_sd_3Wd4oXpBNtUL2mu3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3Wd4oXpBNtUL2mu3',
        spanInst,
        'sd_3Wd4oXpBNtUL2mu3'
      );
    }
  }

  async sd_ffRJaKXLTzEZVD2d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ffRJaKXLTzEZVD2d',
      parentSpanInst
    );
    try {
      const sd_hz7cJCqjR9gSYI7NInstance: sd_hz7cJCqjR9gSYI7N.idsutil =
        sd_hz7cJCqjR9gSYI7N.idsutil.getInstance();
      let outputVariables =
        await sd_hz7cJCqjR9gSYI7NInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_278wXkLaiJeBqdZY(bh, parentSpanInst);
      //appendnew_next_sd_ffRJaKXLTzEZVD2d
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ffRJaKXLTzEZVD2d',
        spanInst,
        'sd_ffRJaKXLTzEZVD2d'
      );
    }
  }

  async sd_278wXkLaiJeBqdZY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_278wXkLaiJeBqdZY',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EFHUYXG7JBAfLIvC(bh, parentSpanInst);
      //appendnew_next_sd_278wXkLaiJeBqdZY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_278wXkLaiJeBqdZY',
        spanInst,
        'sd_278wXkLaiJeBqdZY'
      );
    }
  }

  async sd_EFHUYXG7JBAfLIvC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EFHUYXG7JBAfLIvC',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eu25dmBgoNgq4ql5(bh, parentSpanInst);
      //appendnew_next_sd_EFHUYXG7JBAfLIvC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EFHUYXG7JBAfLIvC',
        spanInst,
        'sd_EFHUYXG7JBAfLIvC'
      );
    }
  }

  async sd_eu25dmBgoNgq4ql5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eu25dmBgoNgq4ql5',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_mzRZzgbkF0HOU406(bh, parentSpanInst);
      } else {
        bh = await this.sd_36Jy7Qxj1JUlOn8s(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eu25dmBgoNgq4ql5',
        spanInst,
        'sd_eu25dmBgoNgq4ql5'
      );
    }
  }

  async sd_mzRZzgbkF0HOU406(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mzRZzgbkF0HOU406',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_yhKzwUZCfrN9CEwn(bh, parentSpanInst);
      //appendnew_next_sd_mzRZzgbkF0HOU406
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mzRZzgbkF0HOU406',
        spanInst,
        'sd_mzRZzgbkF0HOU406'
      );
    }
  }

  async sd_yhKzwUZCfrN9CEwn(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yhKzwUZCfrN9CEwn');
    }
  }

  async sd_36Jy7Qxj1JUlOn8s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_36Jy7Qxj1JUlOn8s',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_eMfFVvnJRVi9RWy0(bh, parentSpanInst);
      //appendnew_next_sd_36Jy7Qxj1JUlOn8s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_36Jy7Qxj1JUlOn8s',
        spanInst,
        'sd_36Jy7Qxj1JUlOn8s'
      );
    }
  }

  async sd_eMfFVvnJRVi9RWy0(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eMfFVvnJRVi9RWy0');
    }
  }

  async sd_He4HYrFuNzVqpYNM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_He4HYrFuNzVqpYNM',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_wgITyyUNqVbYDiwP(bh, parentSpanInst);
      //appendnew_next_sd_He4HYrFuNzVqpYNM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_He4HYrFuNzVqpYNM',
        spanInst,
        'sd_He4HYrFuNzVqpYNM'
      );
    }
  }

  async sd_wgITyyUNqVbYDiwP(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wgITyyUNqVbYDiwP');
    }
  }

  async sd_RaSsTON15CeowbdC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RaSsTON15CeowbdC',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_RaSsTON15CeowbdC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RaSsTON15CeowbdC',
        spanInst,
        'sd_RaSsTON15CeowbdC'
      );
    }
  }

  async sd_bR6FjmWNZRIxpPpa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bR6FjmWNZRIxpPpa',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_r8Dn8rtN6ODqn8bW(bh, parentSpanInst);
      //appendnew_next_sd_bR6FjmWNZRIxpPpa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bR6FjmWNZRIxpPpa',
        spanInst,
        'sd_bR6FjmWNZRIxpPpa'
      );
    }
  }

  async sd_r8Dn8rtN6ODqn8bW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r8Dn8rtN6ODqn8bW',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_O2SpneedfRnpchh2(bh, parentSpanInst);
      //appendnew_next_sd_r8Dn8rtN6ODqn8bW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r8Dn8rtN6ODqn8bW',
        spanInst,
        'sd_r8Dn8rtN6ODqn8bW'
      );
    }
  }

  async sd_O2SpneedfRnpchh2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_O2SpneedfRnpchh2',
      parentSpanInst
    );
    try {
      const sd_hz7cJCqjR9gSYI7NInstance: sd_hz7cJCqjR9gSYI7N.idsutil =
        sd_hz7cJCqjR9gSYI7N.idsutil.getInstance();
      let outputVariables =
        await sd_hz7cJCqjR9gSYI7NInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PaRKywQEHbsrSbpe(bh, parentSpanInst);
      //appendnew_next_sd_O2SpneedfRnpchh2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O2SpneedfRnpchh2',
        spanInst,
        'sd_O2SpneedfRnpchh2'
      );
    }
  }

  async sd_PaRKywQEHbsrSbpe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PaRKywQEHbsrSbpe',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_qbgvEgCNjKM31nxq(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_l0KUbx9GlBSOFDyd(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PaRKywQEHbsrSbpe',
        spanInst,
        'sd_PaRKywQEHbsrSbpe'
      );
    }
  }

  async sd_qbgvEgCNjKM31nxq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qbgvEgCNjKM31nxq',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_qbgvEgCNjKM31nxq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qbgvEgCNjKM31nxq',
        spanInst,
        'sd_qbgvEgCNjKM31nxq'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_4ukUYqFy18A6qDLi(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_4ukUYqFy18A6qDLi(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4ukUYqFy18A6qDLi');
    }
  }

  async sd_l0KUbx9GlBSOFDyd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l0KUbx9GlBSOFDyd',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_4ukUYqFy18A6qDLi(bh, parentSpanInst);
      //appendnew_next_sd_l0KUbx9GlBSOFDyd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l0KUbx9GlBSOFDyd',
        spanInst,
        'sd_l0KUbx9GlBSOFDyd'
      );
    }
  }

  async sd_6jtL0FzDDb1yYjcl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6jtL0FzDDb1yYjcl',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aumuBYFLXWroaIgh(bh, parentSpanInst);
      //appendnew_next_sd_6jtL0FzDDb1yYjcl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6jtL0FzDDb1yYjcl',
        spanInst,
        'sd_6jtL0FzDDb1yYjcl'
      );
    }
  }

  async sd_aumuBYFLXWroaIgh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aumuBYFLXWroaIgh',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_udkjWig08esopRvM(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_qofo8oHR1nMbs8hS(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aumuBYFLXWroaIgh',
        spanInst,
        'sd_aumuBYFLXWroaIgh'
      );
    }
  }

  async sd_udkjWig08esopRvM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_udkjWig08esopRvM',
      parentSpanInst
    );
    try {
      const sessionStore = bh.web.req.sessionStore;
      const res = new Promise((res, rej) => {
        sessionStore.all((err, sessions) => {
          const promises = Object.keys(sessions).map((sid) => {
            return new Promise((resolve, reject) => {
              sessionStore.get(sid, (err, session) => {
                if (
                  session?.data?.userInfo?.username ===
                  bh.input.query.password_reset_username
                ) {
                  log.debug(
                    `[LCB] username matched::${session.data.userInfo.username}`
                  );
                  sessionStore.destroy(sid, (err, d) => {
                    resolve(d);
                  });
                } else {
                  resolve(undefined);
                }
              });
            });
          });
          Promise.all(promises).then((d) => res(d));
        });
      });

      const rr = await res;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Lvfh5a0Xy9zYUZ6C(bh, parentSpanInst);
      //appendnew_next_sd_udkjWig08esopRvM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_udkjWig08esopRvM',
        spanInst,
        'sd_udkjWig08esopRvM'
      );
    }
  }

  async sd_Lvfh5a0Xy9zYUZ6C(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Lvfh5a0Xy9zYUZ6C');
    }
  }

  async sd_qofo8oHR1nMbs8hS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qofo8oHR1nMbs8hS',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Vv9cNzswdDj3d6lK(bh, parentSpanInst);
      //appendnew_next_sd_qofo8oHR1nMbs8hS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qofo8oHR1nMbs8hS',
        spanInst,
        'sd_qofo8oHR1nMbs8hS'
      );
    }
  }

  async sd_Vv9cNzswdDj3d6lK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vv9cNzswdDj3d6lK',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LR2CL6eZ5VIsSkUZ(bh, parentSpanInst);
      //appendnew_next_sd_Vv9cNzswdDj3d6lK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vv9cNzswdDj3d6lK',
        spanInst,
        'sd_Vv9cNzswdDj3d6lK'
      );
    }
  }

  async sd_LR2CL6eZ5VIsSkUZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LR2CL6eZ5VIsSkUZ',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_pgv6uBKSZsxATbeg(bh, parentSpanInst);
      } else {
        bh = await this.sd_nKZrFle21t24wQdm(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LR2CL6eZ5VIsSkUZ',
        spanInst,
        'sd_LR2CL6eZ5VIsSkUZ'
      );
    }
  }

  async sd_pgv6uBKSZsxATbeg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pgv6uBKSZsxATbeg',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5aOKgwjyCoZp2r54(bh, parentSpanInst);
      //appendnew_next_sd_pgv6uBKSZsxATbeg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pgv6uBKSZsxATbeg',
        spanInst,
        'sd_pgv6uBKSZsxATbeg'
      );
    }
  }

  async sd_5aOKgwjyCoZp2r54(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5aOKgwjyCoZp2r54');
    }
  }

  async sd_nKZrFle21t24wQdm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nKZrFle21t24wQdm',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5m3stg4kggP7JLr5(bh, parentSpanInst);
      //appendnew_next_sd_nKZrFle21t24wQdm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nKZrFle21t24wQdm',
        spanInst,
        'sd_nKZrFle21t24wQdm'
      );
    }
  }

  async sd_5m3stg4kggP7JLr5(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5m3stg4kggP7JLr5');
    }
  }

  async sd_5tW5SXBNPugfpOEr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5tW5SXBNPugfpOEr',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9ssqncmxbQjYXrRJ(bh, parentSpanInst);
      //appendnew_next_sd_5tW5SXBNPugfpOEr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5tW5SXBNPugfpOEr',
        spanInst,
        'sd_5tW5SXBNPugfpOEr'
      );
    }
  }

  async sd_9ssqncmxbQjYXrRJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9ssqncmxbQjYXrRJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zkWO4up4PmGmTfHh(bh, parentSpanInst);
      //appendnew_next_sd_9ssqncmxbQjYXrRJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9ssqncmxbQjYXrRJ',
        spanInst,
        'sd_9ssqncmxbQjYXrRJ'
      );
    }
  }

  async sd_zkWO4up4PmGmTfHh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zkWO4up4PmGmTfHh',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BgBKJou0kSmcECZw(bh, parentSpanInst);
      //appendnew_next_sd_zkWO4up4PmGmTfHh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zkWO4up4PmGmTfHh',
        spanInst,
        'sd_zkWO4up4PmGmTfHh'
      );
    }
  }

  async sd_BgBKJou0kSmcECZw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BgBKJou0kSmcECZw',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1JQHse1M9P1PhFFC(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_ySI89BYsVEbu9wnS(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BgBKJou0kSmcECZw',
        spanInst,
        'sd_BgBKJou0kSmcECZw'
      );
    }
  }

  async sd_1JQHse1M9P1PhFFC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1JQHse1M9P1PhFFC',
      parentSpanInst
    );
    try {
      const sd_hz7cJCqjR9gSYI7NInstance: sd_hz7cJCqjR9gSYI7N.idsutil =
        sd_hz7cJCqjR9gSYI7N.idsutil.getInstance();
      let outputVariables = await sd_hz7cJCqjR9gSYI7NInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RHECwFTiOgvbDCJp(bh, parentSpanInst);
      //appendnew_next_sd_1JQHse1M9P1PhFFC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1JQHse1M9P1PhFFC',
        spanInst,
        'sd_1JQHse1M9P1PhFFC'
      );
    }
  }

  async sd_RHECwFTiOgvbDCJp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RHECwFTiOgvbDCJp',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_2zPC2nQDhjNdL7nu(bh, parentSpanInst);
      } else {
        bh = await this.sd_r6YNQG7UY8gXv3tF(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RHECwFTiOgvbDCJp',
        spanInst,
        'sd_RHECwFTiOgvbDCJp'
      );
    }
  }

  async sd_2zPC2nQDhjNdL7nu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2zPC2nQDhjNdL7nu',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XC2S6n2S2dAJnpTX(bh, parentSpanInst);
      //appendnew_next_sd_2zPC2nQDhjNdL7nu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2zPC2nQDhjNdL7nu',
        spanInst,
        'sd_2zPC2nQDhjNdL7nu'
      );
    }
  }

  async sd_XC2S6n2S2dAJnpTX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XC2S6n2S2dAJnpTX',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_laxZxHlwKLzeO9ts(bh, parentSpanInst);
      //appendnew_next_sd_XC2S6n2S2dAJnpTX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XC2S6n2S2dAJnpTX',
        spanInst,
        'sd_XC2S6n2S2dAJnpTX'
      );
    }
  }

  async sd_laxZxHlwKLzeO9ts(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_laxZxHlwKLzeO9ts');
    }
  }

  async sd_r6YNQG7UY8gXv3tF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r6YNQG7UY8gXv3tF',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_IvtWhkeVrL1UQLvy(bh, parentSpanInst);
      } else {
        bh = await this.sd_PE0tSBNLsGxuPBEh(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r6YNQG7UY8gXv3tF',
        spanInst,
        'sd_r6YNQG7UY8gXv3tF'
      );
    }
  }

  async sd_IvtWhkeVrL1UQLvy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IvtWhkeVrL1UQLvy',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sh51rT7EtShw4AZS(bh, parentSpanInst);
      //appendnew_next_sd_IvtWhkeVrL1UQLvy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IvtWhkeVrL1UQLvy',
        spanInst,
        'sd_IvtWhkeVrL1UQLvy'
      );
    }
  }

  async sd_sh51rT7EtShw4AZS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sh51rT7EtShw4AZS',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_PE0tSBNLsGxuPBEh(bh, parentSpanInst);
      //appendnew_next_sd_sh51rT7EtShw4AZS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sh51rT7EtShw4AZS',
        spanInst,
        'sd_sh51rT7EtShw4AZS'
      );
    }
  }

  async sd_PE0tSBNLsGxuPBEh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PE0tSBNLsGxuPBEh',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PE0tSBNLsGxuPBEh',
        spanInst,
        'sd_PE0tSBNLsGxuPBEh'
      );
    }
  }

  async sd_ySI89BYsVEbu9wnS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ySI89BYsVEbu9wnS',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dIh9qL7rewc3zKbP(bh, parentSpanInst);
      } else {
        bh = await this.sd_pppSnHCCHaXHZaUd(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ySI89BYsVEbu9wnS',
        spanInst,
        'sd_ySI89BYsVEbu9wnS'
      );
    }
  }

  async sd_dIh9qL7rewc3zKbP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dIh9qL7rewc3zKbP',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_laxZxHlwKLzeO9ts(bh, parentSpanInst);
      //appendnew_next_sd_dIh9qL7rewc3zKbP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dIh9qL7rewc3zKbP',
        spanInst,
        'sd_dIh9qL7rewc3zKbP'
      );
    }
  }

  async sd_pppSnHCCHaXHZaUd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pppSnHCCHaXHZaUd',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_laxZxHlwKLzeO9ts(bh, parentSpanInst);
      //appendnew_next_sd_pppSnHCCHaXHZaUd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pppSnHCCHaXHZaUd',
        spanInst,
        'sd_pppSnHCCHaXHZaUd'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_MQA0CExErVpWRWtN(bh, parentSpanInst)) ||
      (await this.sd_SK3o2EhLSGtkZI2w(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_MQA0CExErVpWRWtN(bh, parentSpanInst) {
    const nodes = [
      'sd_wIvYW2Qq6f2H3gAm',
      'sd_ngZ3fcCpRhW9MaHe',
      'sd_ffRJaKXLTzEZVD2d',
      'sd_278wXkLaiJeBqdZY',
      'sd_3Wd4oXpBNtUL2mu3',
      'sd_eu25dmBgoNgq4ql5',
      'sd_mzRZzgbkF0HOU406',
      'sd_36Jy7Qxj1JUlOn8s',
      'sd_yhKzwUZCfrN9CEwn',
      'sd_eMfFVvnJRVi9RWy0',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_RaSsTON15CeowbdC(bh, parentSpanInst);
      //appendnew_next_sd_MQA0CExErVpWRWtN
      return true;
    }
    return false;
  }
  async sd_SK3o2EhLSGtkZI2w(bh, parentSpanInst) {
    const nodes = ['sd_1JQHse1M9P1PhFFC'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_XC2S6n2S2dAJnpTX(bh, parentSpanInst);
      //appendnew_next_sd_SK3o2EhLSGtkZI2w
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}

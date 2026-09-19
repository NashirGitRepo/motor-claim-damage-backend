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
import * as sd_uWQ9ztVG7hDwYMHp from './idsutil'; //_splitter_
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
          bh = await this.sd_RB0yFqsElIPjKMPu(bh, parentSpanInst);
          //appendnew_next_sd_cJJ2rLSQ1xVvcpf5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cJJ2rLSQ1xVvcpf5');
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
          bh = await this.sd_NAt9iDu1JbKG63Oy(bh, parentSpanInst);
          //appendnew_next_sd_6p8CXlbhL4425TKx
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_6p8CXlbhL4425TKx');
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
          bh = await this.sd_WAjJRuQzrSBsPe85(bh, parentSpanInst);
          //appendnew_next_sd_RNBvOJXVRF94vWOL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RNBvOJXVRF94vWOL');
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
          bh = await this.sd_Tn9mlf26HCpzC2rw(bh, parentSpanInst);
          //appendnew_next_sd_9A8Nx7kCTBkOpjSe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9A8Nx7kCTBkOpjSe');
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
          bh = await this.sd_WtxzUbel8aFez5m9(bh, parentSpanInst);
          //appendnew_next_sd_tgT4Ff3Au13GqZ99
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tgT4Ff3Au13GqZ99');
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
          bh = await this.sd_Gf4mpfNIrttgn0aT(bh, parentSpanInst);
          //appendnew_next_sd_JD5eGiigIqqt5xtO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JD5eGiigIqqt5xtO');
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
          bh = await this.sd_R5EcBNYIsLSB89yH(bh, parentSpanInst);
          //appendnew_next_sd_BbntisaGWCAoKwnI
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BbntisaGWCAoKwnI');
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

  async sd_WAjJRuQzrSBsPe85(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WAjJRuQzrSBsPe85',
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
      bh = await this.sd_TE1r04EKnBwPLjs9(bh, parentSpanInst);
      //appendnew_next_sd_WAjJRuQzrSBsPe85
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WAjJRuQzrSBsPe85',
        spanInst,
        'sd_WAjJRuQzrSBsPe85'
      );
    }
  }

  async sd_TE1r04EKnBwPLjs9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TE1r04EKnBwPLjs9',
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
        bh = await this.sd_uyGVDjSG8crCwWUy(bh, parentSpanInst);
      } else {
        bh = await this.sd_pl1njBo42Wk301mZ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TE1r04EKnBwPLjs9',
        spanInst,
        'sd_TE1r04EKnBwPLjs9'
      );
    }
  }

  async sd_uyGVDjSG8crCwWUy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uyGVDjSG8crCwWUy',
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
      bh = await this.sd_JsvZvDKofMBxqdc9(bh, parentSpanInst);
      //appendnew_next_sd_uyGVDjSG8crCwWUy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uyGVDjSG8crCwWUy',
        spanInst,
        'sd_uyGVDjSG8crCwWUy'
      );
    }
  }

  async sd_JsvZvDKofMBxqdc9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JsvZvDKofMBxqdc9',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MUHWsB9Qn00Ruldf(bh, parentSpanInst);
      //appendnew_next_sd_JsvZvDKofMBxqdc9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JsvZvDKofMBxqdc9',
        spanInst,
        'sd_JsvZvDKofMBxqdc9'
      );
    }
  }

  async sd_MUHWsB9Qn00Ruldf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MUHWsB9Qn00Ruldf',
      parentSpanInst
    );
    try {
      const sd_uWQ9ztVG7hDwYMHpInstance: sd_uWQ9ztVG7hDwYMHp.idsutil =
        sd_uWQ9ztVG7hDwYMHp.idsutil.getInstance();
      let outputVariables =
        await sd_uWQ9ztVG7hDwYMHpInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pOODfcbirMxCop4J(bh, parentSpanInst);
      //appendnew_next_sd_MUHWsB9Qn00Ruldf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MUHWsB9Qn00Ruldf',
        spanInst,
        'sd_MUHWsB9Qn00Ruldf'
      );
    }
  }

  async sd_pOODfcbirMxCop4J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pOODfcbirMxCop4J',
      parentSpanInst
    );
    try {
      const sd_uWQ9ztVG7hDwYMHpInstance: sd_uWQ9ztVG7hDwYMHp.idsutil =
        sd_uWQ9ztVG7hDwYMHp.idsutil.getInstance();
      let outputVariables =
        await sd_uWQ9ztVG7hDwYMHpInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eWl6L7TS5jYLhfbI(bh, parentSpanInst);
      //appendnew_next_sd_pOODfcbirMxCop4J
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pOODfcbirMxCop4J',
        spanInst,
        'sd_pOODfcbirMxCop4J'
      );
    }
  }

  async sd_eWl6L7TS5jYLhfbI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eWl6L7TS5jYLhfbI',
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
      await this.sd_x59BnHaPEDTiqgb8(bh, parentSpanInst);
      //appendnew_next_sd_eWl6L7TS5jYLhfbI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eWl6L7TS5jYLhfbI',
        spanInst,
        'sd_eWl6L7TS5jYLhfbI'
      );
    }
  }

  async sd_x59BnHaPEDTiqgb8(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x59BnHaPEDTiqgb8');
    }
  }

  async sd_pl1njBo42Wk301mZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pl1njBo42Wk301mZ',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KtxkV7BTQc9vn9EA(bh, parentSpanInst);
      //appendnew_next_sd_pl1njBo42Wk301mZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pl1njBo42Wk301mZ',
        spanInst,
        'sd_pl1njBo42Wk301mZ'
      );
    }
  }

  async sd_KtxkV7BTQc9vn9EA(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KtxkV7BTQc9vn9EA');
    }
  }

  async sd_RB0yFqsElIPjKMPu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RB0yFqsElIPjKMPu',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_c0b5cGk66sWpafaf(bh, parentSpanInst);
      //appendnew_next_sd_RB0yFqsElIPjKMPu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RB0yFqsElIPjKMPu',
        spanInst,
        'sd_RB0yFqsElIPjKMPu'
      );
    }
  }

  async sd_c0b5cGk66sWpafaf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_c0b5cGk66sWpafaf',
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
        'sd_c0b5cGk66sWpafaf',
        spanInst,
        'sd_c0b5cGk66sWpafaf'
      );
    }
  }

  async sd_Tn9mlf26HCpzC2rw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Tn9mlf26HCpzC2rw',
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
      bh = await this.sd_yu07uUIiKfqAvXd2(bh, parentSpanInst);
      //appendnew_next_sd_Tn9mlf26HCpzC2rw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Tn9mlf26HCpzC2rw',
        spanInst,
        'sd_Tn9mlf26HCpzC2rw'
      );
    }
  }

  async sd_yu07uUIiKfqAvXd2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yu07uUIiKfqAvXd2',
      parentSpanInst
    );
    try {
      const sd_uWQ9ztVG7hDwYMHpInstance: sd_uWQ9ztVG7hDwYMHp.idsutil =
        sd_uWQ9ztVG7hDwYMHp.idsutil.getInstance();
      let outputVariables =
        await sd_uWQ9ztVG7hDwYMHpInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_l3pen2OTggGb7Zjh(bh, parentSpanInst);
      //appendnew_next_sd_yu07uUIiKfqAvXd2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yu07uUIiKfqAvXd2',
        spanInst,
        'sd_yu07uUIiKfqAvXd2'
      );
    }
  }

  async sd_l3pen2OTggGb7Zjh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l3pen2OTggGb7Zjh',
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
      bh = await this.sd_DDAnVxbxo8KsbLKZ(bh, parentSpanInst);
      //appendnew_next_sd_l3pen2OTggGb7Zjh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l3pen2OTggGb7Zjh',
        spanInst,
        'sd_l3pen2OTggGb7Zjh'
      );
    }
  }

  async sd_DDAnVxbxo8KsbLKZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DDAnVxbxo8KsbLKZ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kTiahqg00Ufg6mCL(bh, parentSpanInst);
      //appendnew_next_sd_DDAnVxbxo8KsbLKZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DDAnVxbxo8KsbLKZ',
        spanInst,
        'sd_DDAnVxbxo8KsbLKZ'
      );
    }
  }

  async sd_kTiahqg00Ufg6mCL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kTiahqg00Ufg6mCL',
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
        bh = await this.sd_ikFB010WjwnsyzI1(bh, parentSpanInst);
      } else {
        bh = await this.sd_4YCYanSWJbbnhI2L(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kTiahqg00Ufg6mCL',
        spanInst,
        'sd_kTiahqg00Ufg6mCL'
      );
    }
  }

  async sd_ikFB010WjwnsyzI1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ikFB010WjwnsyzI1',
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
      await this.sd_odyELfuhy0xTxsKP(bh, parentSpanInst);
      //appendnew_next_sd_ikFB010WjwnsyzI1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ikFB010WjwnsyzI1',
        spanInst,
        'sd_ikFB010WjwnsyzI1'
      );
    }
  }

  async sd_odyELfuhy0xTxsKP(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_odyELfuhy0xTxsKP');
    }
  }

  async sd_4YCYanSWJbbnhI2L(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4YCYanSWJbbnhI2L',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_OSrLCU0hNcarjHfl(bh, parentSpanInst);
      //appendnew_next_sd_4YCYanSWJbbnhI2L
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4YCYanSWJbbnhI2L',
        spanInst,
        'sd_4YCYanSWJbbnhI2L'
      );
    }
  }

  async sd_OSrLCU0hNcarjHfl(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OSrLCU0hNcarjHfl');
    }
  }

  async sd_WtxzUbel8aFez5m9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WtxzUbel8aFez5m9',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_fANPlIp46q6PJe20(bh, parentSpanInst);
      //appendnew_next_sd_WtxzUbel8aFez5m9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WtxzUbel8aFez5m9',
        spanInst,
        'sd_WtxzUbel8aFez5m9'
      );
    }
  }

  async sd_fANPlIp46q6PJe20(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fANPlIp46q6PJe20');
    }
  }

  async sd_170IKhiCb7o1QP4o(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_170IKhiCb7o1QP4o',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_170IKhiCb7o1QP4o
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_170IKhiCb7o1QP4o',
        spanInst,
        'sd_170IKhiCb7o1QP4o'
      );
    }
  }

  async sd_Gf4mpfNIrttgn0aT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Gf4mpfNIrttgn0aT',
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
      bh = await this.sd_sR0UeWc7yRli42AE(bh, parentSpanInst);
      //appendnew_next_sd_Gf4mpfNIrttgn0aT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gf4mpfNIrttgn0aT',
        spanInst,
        'sd_Gf4mpfNIrttgn0aT'
      );
    }
  }

  async sd_sR0UeWc7yRli42AE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sR0UeWc7yRli42AE',
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
      bh = await this.sd_8DNPLFOeuvXepQZm(bh, parentSpanInst);
      //appendnew_next_sd_sR0UeWc7yRli42AE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sR0UeWc7yRli42AE',
        spanInst,
        'sd_sR0UeWc7yRli42AE'
      );
    }
  }

  async sd_8DNPLFOeuvXepQZm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8DNPLFOeuvXepQZm',
      parentSpanInst
    );
    try {
      const sd_uWQ9ztVG7hDwYMHpInstance: sd_uWQ9ztVG7hDwYMHp.idsutil =
        sd_uWQ9ztVG7hDwYMHp.idsutil.getInstance();
      let outputVariables =
        await sd_uWQ9ztVG7hDwYMHpInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7bfxgkSWfr9zfF4U(bh, parentSpanInst);
      //appendnew_next_sd_8DNPLFOeuvXepQZm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8DNPLFOeuvXepQZm',
        spanInst,
        'sd_8DNPLFOeuvXepQZm'
      );
    }
  }

  async sd_7bfxgkSWfr9zfF4U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7bfxgkSWfr9zfF4U',
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
        bh = await this.sd_A4T8jhVm7rbhTQwF(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_wvJCo67GIuthx49S(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7bfxgkSWfr9zfF4U',
        spanInst,
        'sd_7bfxgkSWfr9zfF4U'
      );
    }
  }

  async sd_A4T8jhVm7rbhTQwF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A4T8jhVm7rbhTQwF',
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
      //appendnew_next_sd_A4T8jhVm7rbhTQwF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A4T8jhVm7rbhTQwF',
        spanInst,
        'sd_A4T8jhVm7rbhTQwF'
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
      await this.sd_IG6HX7UD9oaCgyjk(bh, parentSpanInst);
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

  async sd_IG6HX7UD9oaCgyjk(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IG6HX7UD9oaCgyjk');
    }
  }

  async sd_wvJCo67GIuthx49S(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wvJCo67GIuthx49S',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IG6HX7UD9oaCgyjk(bh, parentSpanInst);
      //appendnew_next_sd_wvJCo67GIuthx49S
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wvJCo67GIuthx49S',
        spanInst,
        'sd_wvJCo67GIuthx49S'
      );
    }
  }

  async sd_R5EcBNYIsLSB89yH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R5EcBNYIsLSB89yH',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Rz76p1FMoWtMpi3A(bh, parentSpanInst);
      //appendnew_next_sd_R5EcBNYIsLSB89yH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R5EcBNYIsLSB89yH',
        spanInst,
        'sd_R5EcBNYIsLSB89yH'
      );
    }
  }

  async sd_Rz76p1FMoWtMpi3A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Rz76p1FMoWtMpi3A',
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
        bh = await this.sd_luTnwrPMwsDikNlY(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_UDNYK7BYFvNUe7FN(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Rz76p1FMoWtMpi3A',
        spanInst,
        'sd_Rz76p1FMoWtMpi3A'
      );
    }
  }

  async sd_luTnwrPMwsDikNlY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_luTnwrPMwsDikNlY',
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
      await this.sd_P1m67YGLhsyE3BPX(bh, parentSpanInst);
      //appendnew_next_sd_luTnwrPMwsDikNlY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_luTnwrPMwsDikNlY',
        spanInst,
        'sd_luTnwrPMwsDikNlY'
      );
    }
  }

  async sd_P1m67YGLhsyE3BPX(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P1m67YGLhsyE3BPX');
    }
  }

  async sd_UDNYK7BYFvNUe7FN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UDNYK7BYFvNUe7FN',
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
      bh = await this.sd_scWuNdA9w62vDXND(bh, parentSpanInst);
      //appendnew_next_sd_UDNYK7BYFvNUe7FN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UDNYK7BYFvNUe7FN',
        spanInst,
        'sd_UDNYK7BYFvNUe7FN'
      );
    }
  }

  async sd_scWuNdA9w62vDXND(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_scWuNdA9w62vDXND',
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
      bh = await this.sd_dqUifewyrepJyVig(bh, parentSpanInst);
      //appendnew_next_sd_scWuNdA9w62vDXND
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_scWuNdA9w62vDXND',
        spanInst,
        'sd_scWuNdA9w62vDXND'
      );
    }
  }

  async sd_dqUifewyrepJyVig(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dqUifewyrepJyVig',
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
        bh = await this.sd_hRcogZBK8RPmKziF(bh, parentSpanInst);
      } else {
        bh = await this.sd_R5jGPwaIS9LswKk7(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dqUifewyrepJyVig',
        spanInst,
        'sd_dqUifewyrepJyVig'
      );
    }
  }

  async sd_hRcogZBK8RPmKziF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hRcogZBK8RPmKziF',
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
      await this.sd_DvIsF0DQqua3q15G(bh, parentSpanInst);
      //appendnew_next_sd_hRcogZBK8RPmKziF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hRcogZBK8RPmKziF',
        spanInst,
        'sd_hRcogZBK8RPmKziF'
      );
    }
  }

  async sd_DvIsF0DQqua3q15G(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DvIsF0DQqua3q15G');
    }
  }

  async sd_R5jGPwaIS9LswKk7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R5jGPwaIS9LswKk7',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_7OVg7stHoNn9M1nh(bh, parentSpanInst);
      //appendnew_next_sd_R5jGPwaIS9LswKk7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R5jGPwaIS9LswKk7',
        spanInst,
        'sd_R5jGPwaIS9LswKk7'
      );
    }
  }

  async sd_7OVg7stHoNn9M1nh(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7OVg7stHoNn9M1nh');
    }
  }

  async sd_NAt9iDu1JbKG63Oy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NAt9iDu1JbKG63Oy',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OZZ3YmVMb93cBIHk(bh, parentSpanInst);
      //appendnew_next_sd_NAt9iDu1JbKG63Oy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NAt9iDu1JbKG63Oy',
        spanInst,
        'sd_NAt9iDu1JbKG63Oy'
      );
    }
  }

  async sd_OZZ3YmVMb93cBIHk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OZZ3YmVMb93cBIHk',
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
      bh = await this.sd_SysZ4dL3cbSGLXmK(bh, parentSpanInst);
      //appendnew_next_sd_OZZ3YmVMb93cBIHk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OZZ3YmVMb93cBIHk',
        spanInst,
        'sd_OZZ3YmVMb93cBIHk'
      );
    }
  }

  async sd_SysZ4dL3cbSGLXmK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SysZ4dL3cbSGLXmK',
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
      bh = await this.sd_lanP8BiTlzuMbk8E(bh, parentSpanInst);
      //appendnew_next_sd_SysZ4dL3cbSGLXmK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SysZ4dL3cbSGLXmK',
        spanInst,
        'sd_SysZ4dL3cbSGLXmK'
      );
    }
  }

  async sd_lanP8BiTlzuMbk8E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lanP8BiTlzuMbk8E',
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
        bh = await this.sd_fMO8LLAC9UYBAurP(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_q5NzXekMc47qenxp(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lanP8BiTlzuMbk8E',
        spanInst,
        'sd_lanP8BiTlzuMbk8E'
      );
    }
  }

  async sd_fMO8LLAC9UYBAurP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fMO8LLAC9UYBAurP',
      parentSpanInst
    );
    try {
      const sd_uWQ9ztVG7hDwYMHpInstance: sd_uWQ9ztVG7hDwYMHp.idsutil =
        sd_uWQ9ztVG7hDwYMHp.idsutil.getInstance();
      let outputVariables = await sd_uWQ9ztVG7hDwYMHpInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1R1qWag6321S5vSx(bh, parentSpanInst);
      //appendnew_next_sd_fMO8LLAC9UYBAurP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fMO8LLAC9UYBAurP',
        spanInst,
        'sd_fMO8LLAC9UYBAurP'
      );
    }
  }

  async sd_1R1qWag6321S5vSx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1R1qWag6321S5vSx',
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
        bh = await this.sd_0XEGKvUqUkhu6Afm(bh, parentSpanInst);
      } else {
        bh = await this.sd_z2Na8URvLRPsKwWq(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1R1qWag6321S5vSx',
        spanInst,
        'sd_1R1qWag6321S5vSx'
      );
    }
  }

  async sd_0XEGKvUqUkhu6Afm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0XEGKvUqUkhu6Afm',
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
      bh = await this.sd_9a19SakaaMEX4xK4(bh, parentSpanInst);
      //appendnew_next_sd_0XEGKvUqUkhu6Afm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0XEGKvUqUkhu6Afm',
        spanInst,
        'sd_0XEGKvUqUkhu6Afm'
      );
    }
  }

  async sd_9a19SakaaMEX4xK4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9a19SakaaMEX4xK4',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_32HQVyNgjZJ2SOTK(bh, parentSpanInst);
      //appendnew_next_sd_9a19SakaaMEX4xK4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9a19SakaaMEX4xK4',
        spanInst,
        'sd_9a19SakaaMEX4xK4'
      );
    }
  }

  async sd_32HQVyNgjZJ2SOTK(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_32HQVyNgjZJ2SOTK');
    }
  }

  async sd_z2Na8URvLRPsKwWq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_z2Na8URvLRPsKwWq',
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
        bh = await this.sd_aTTKbpTyaSxrGg4O(bh, parentSpanInst);
      } else {
        bh = await this.sd_48dEGbdgtCLkyukN(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z2Na8URvLRPsKwWq',
        spanInst,
        'sd_z2Na8URvLRPsKwWq'
      );
    }
  }

  async sd_aTTKbpTyaSxrGg4O(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aTTKbpTyaSxrGg4O',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Lqg9rCht4bHWNVbV(bh, parentSpanInst);
      //appendnew_next_sd_aTTKbpTyaSxrGg4O
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aTTKbpTyaSxrGg4O',
        spanInst,
        'sd_aTTKbpTyaSxrGg4O'
      );
    }
  }

  async sd_Lqg9rCht4bHWNVbV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Lqg9rCht4bHWNVbV',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_48dEGbdgtCLkyukN(bh, parentSpanInst);
      //appendnew_next_sd_Lqg9rCht4bHWNVbV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Lqg9rCht4bHWNVbV',
        spanInst,
        'sd_Lqg9rCht4bHWNVbV'
      );
    }
  }

  async sd_48dEGbdgtCLkyukN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_48dEGbdgtCLkyukN',
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
        'sd_48dEGbdgtCLkyukN',
        spanInst,
        'sd_48dEGbdgtCLkyukN'
      );
    }
  }

  async sd_q5NzXekMc47qenxp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_q5NzXekMc47qenxp',
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
        bh = await this.sd_1e4NymPS1XfehXbi(bh, parentSpanInst);
      } else {
        bh = await this.sd_NWpj0VusRbWNJV0H(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_q5NzXekMc47qenxp',
        spanInst,
        'sd_q5NzXekMc47qenxp'
      );
    }
  }

  async sd_1e4NymPS1XfehXbi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1e4NymPS1XfehXbi',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_32HQVyNgjZJ2SOTK(bh, parentSpanInst);
      //appendnew_next_sd_1e4NymPS1XfehXbi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1e4NymPS1XfehXbi',
        spanInst,
        'sd_1e4NymPS1XfehXbi'
      );
    }
  }

  async sd_NWpj0VusRbWNJV0H(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NWpj0VusRbWNJV0H',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_32HQVyNgjZJ2SOTK(bh, parentSpanInst);
      //appendnew_next_sd_NWpj0VusRbWNJV0H
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NWpj0VusRbWNJV0H',
        spanInst,
        'sd_NWpj0VusRbWNJV0H'
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
      (await this.sd_KkS9PohJ5x4aYrY5(bh, parentSpanInst)) ||
      (await this.sd_ggB93wy07P7EuPdM(bh, parentSpanInst))
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
  async sd_KkS9PohJ5x4aYrY5(bh, parentSpanInst) {
    const nodes = [
      'sd_pOODfcbirMxCop4J',
      'sd_9A8Nx7kCTBkOpjSe',
      'sd_yu07uUIiKfqAvXd2',
      'sd_l3pen2OTggGb7Zjh',
      'sd_Tn9mlf26HCpzC2rw',
      'sd_kTiahqg00Ufg6mCL',
      'sd_ikFB010WjwnsyzI1',
      'sd_4YCYanSWJbbnhI2L',
      'sd_odyELfuhy0xTxsKP',
      'sd_OSrLCU0hNcarjHfl',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_170IKhiCb7o1QP4o(bh, parentSpanInst);
      //appendnew_next_sd_KkS9PohJ5x4aYrY5
      return true;
    }
    return false;
  }
  async sd_ggB93wy07P7EuPdM(bh, parentSpanInst) {
    const nodes = ['sd_fMO8LLAC9UYBAurP'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_9a19SakaaMEX4xK4(bh, parentSpanInst);
      //appendnew_next_sd_ggB93wy07P7EuPdM
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}

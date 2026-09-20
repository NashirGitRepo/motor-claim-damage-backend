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
import * as sd_htNZzTIIY7TR5S8J from './idsutil'; //_splitter_
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
          bh = await this.sd_0xPfYRacv9TnG31W(bh, parentSpanInst);
          //appendnew_next_sd_VjPaCF4vq9VSQOzl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VjPaCF4vq9VSQOzl');
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
          bh = await this.sd_GRfIysP6tOJys5W3(bh, parentSpanInst);
          //appendnew_next_sd_xF81xGMsQivBi7kL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xF81xGMsQivBi7kL');
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
          bh = await this.sd_2lGxbQy0ve4Sdny1(bh, parentSpanInst);
          //appendnew_next_sd_xpiTtPKfEIYMjAxL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xpiTtPKfEIYMjAxL');
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
          bh = await this.sd_MK2KNzTg9PMvNb9t(bh, parentSpanInst);
          //appendnew_next_sd_EmSSoAe1BpMtf2c8
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EmSSoAe1BpMtf2c8');
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
          bh = await this.sd_AbpCG2oP3T6jHvsM(bh, parentSpanInst);
          //appendnew_next_sd_I4n9i5C2zhI3eK76
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_I4n9i5C2zhI3eK76');
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
          bh = await this.sd_yMngAXStvZeb4Apb(bh, parentSpanInst);
          //appendnew_next_sd_nNr73rBUy7bJ0udw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nNr73rBUy7bJ0udw');
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
          bh = await this.sd_HnopC3TQg84L0f9U(bh, parentSpanInst);
          //appendnew_next_sd_pYuQYSH3u1GDLAfc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pYuQYSH3u1GDLAfc');
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

  async sd_2lGxbQy0ve4Sdny1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2lGxbQy0ve4Sdny1',
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
      bh = await this.sd_MuHA4IL9mFvMBu7P(bh, parentSpanInst);
      //appendnew_next_sd_2lGxbQy0ve4Sdny1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2lGxbQy0ve4Sdny1',
        spanInst,
        'sd_2lGxbQy0ve4Sdny1'
      );
    }
  }

  async sd_MuHA4IL9mFvMBu7P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MuHA4IL9mFvMBu7P',
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
        bh = await this.sd_m1naaIpW5PGArlPQ(bh, parentSpanInst);
      } else {
        bh = await this.sd_3dZ5bhjmp80jlowi(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MuHA4IL9mFvMBu7P',
        spanInst,
        'sd_MuHA4IL9mFvMBu7P'
      );
    }
  }

  async sd_m1naaIpW5PGArlPQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_m1naaIpW5PGArlPQ',
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
      bh = await this.sd_zGY4E9cfwsq6Atq9(bh, parentSpanInst);
      //appendnew_next_sd_m1naaIpW5PGArlPQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m1naaIpW5PGArlPQ',
        spanInst,
        'sd_m1naaIpW5PGArlPQ'
      );
    }
  }

  async sd_zGY4E9cfwsq6Atq9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zGY4E9cfwsq6Atq9',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iRB9MyBmcV2O8MmQ(bh, parentSpanInst);
      //appendnew_next_sd_zGY4E9cfwsq6Atq9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zGY4E9cfwsq6Atq9',
        spanInst,
        'sd_zGY4E9cfwsq6Atq9'
      );
    }
  }

  async sd_iRB9MyBmcV2O8MmQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iRB9MyBmcV2O8MmQ',
      parentSpanInst
    );
    try {
      const sd_htNZzTIIY7TR5S8JInstance: sd_htNZzTIIY7TR5S8J.idsutil =
        sd_htNZzTIIY7TR5S8J.idsutil.getInstance();
      let outputVariables =
        await sd_htNZzTIIY7TR5S8JInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cf5QTOzVXFHBywcX(bh, parentSpanInst);
      //appendnew_next_sd_iRB9MyBmcV2O8MmQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iRB9MyBmcV2O8MmQ',
        spanInst,
        'sd_iRB9MyBmcV2O8MmQ'
      );
    }
  }

  async sd_cf5QTOzVXFHBywcX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cf5QTOzVXFHBywcX',
      parentSpanInst
    );
    try {
      const sd_htNZzTIIY7TR5S8JInstance: sd_htNZzTIIY7TR5S8J.idsutil =
        sd_htNZzTIIY7TR5S8J.idsutil.getInstance();
      let outputVariables =
        await sd_htNZzTIIY7TR5S8JInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CIMt4i1VK94ilRiX(bh, parentSpanInst);
      //appendnew_next_sd_cf5QTOzVXFHBywcX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cf5QTOzVXFHBywcX',
        spanInst,
        'sd_cf5QTOzVXFHBywcX'
      );
    }
  }

  async sd_CIMt4i1VK94ilRiX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CIMt4i1VK94ilRiX',
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
      await this.sd_aY5sPnQP3osu84BA(bh, parentSpanInst);
      //appendnew_next_sd_CIMt4i1VK94ilRiX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CIMt4i1VK94ilRiX',
        spanInst,
        'sd_CIMt4i1VK94ilRiX'
      );
    }
  }

  async sd_aY5sPnQP3osu84BA(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aY5sPnQP3osu84BA');
    }
  }

  async sd_3dZ5bhjmp80jlowi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3dZ5bhjmp80jlowi',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GPiM7FbRCCoFTAF8(bh, parentSpanInst);
      //appendnew_next_sd_3dZ5bhjmp80jlowi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3dZ5bhjmp80jlowi',
        spanInst,
        'sd_3dZ5bhjmp80jlowi'
      );
    }
  }

  async sd_GPiM7FbRCCoFTAF8(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GPiM7FbRCCoFTAF8');
    }
  }

  async sd_0xPfYRacv9TnG31W(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0xPfYRacv9TnG31W',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_B2QjM8UjkSn8g8eg(bh, parentSpanInst);
      //appendnew_next_sd_0xPfYRacv9TnG31W
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0xPfYRacv9TnG31W',
        spanInst,
        'sd_0xPfYRacv9TnG31W'
      );
    }
  }

  async sd_B2QjM8UjkSn8g8eg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B2QjM8UjkSn8g8eg',
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
        'sd_B2QjM8UjkSn8g8eg',
        spanInst,
        'sd_B2QjM8UjkSn8g8eg'
      );
    }
  }

  async sd_MK2KNzTg9PMvNb9t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MK2KNzTg9PMvNb9t',
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
      bh = await this.sd_L1o0Qv3gt5ylEh0Q(bh, parentSpanInst);
      //appendnew_next_sd_MK2KNzTg9PMvNb9t
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MK2KNzTg9PMvNb9t',
        spanInst,
        'sd_MK2KNzTg9PMvNb9t'
      );
    }
  }

  async sd_L1o0Qv3gt5ylEh0Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L1o0Qv3gt5ylEh0Q',
      parentSpanInst
    );
    try {
      const sd_htNZzTIIY7TR5S8JInstance: sd_htNZzTIIY7TR5S8J.idsutil =
        sd_htNZzTIIY7TR5S8J.idsutil.getInstance();
      let outputVariables =
        await sd_htNZzTIIY7TR5S8JInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9lkUgxXRGUpDpnZr(bh, parentSpanInst);
      //appendnew_next_sd_L1o0Qv3gt5ylEh0Q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L1o0Qv3gt5ylEh0Q',
        spanInst,
        'sd_L1o0Qv3gt5ylEh0Q'
      );
    }
  }

  async sd_9lkUgxXRGUpDpnZr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9lkUgxXRGUpDpnZr',
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
      bh = await this.sd_86kUY0TEct3TDsH5(bh, parentSpanInst);
      //appendnew_next_sd_9lkUgxXRGUpDpnZr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9lkUgxXRGUpDpnZr',
        spanInst,
        'sd_9lkUgxXRGUpDpnZr'
      );
    }
  }

  async sd_86kUY0TEct3TDsH5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_86kUY0TEct3TDsH5',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KS939CFCUCUXLBPd(bh, parentSpanInst);
      //appendnew_next_sd_86kUY0TEct3TDsH5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_86kUY0TEct3TDsH5',
        spanInst,
        'sd_86kUY0TEct3TDsH5'
      );
    }
  }

  async sd_KS939CFCUCUXLBPd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KS939CFCUCUXLBPd',
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
        bh = await this.sd_TJWSr6IsAFaOztlf(bh, parentSpanInst);
      } else {
        bh = await this.sd_tRnp441d49sLlnHU(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KS939CFCUCUXLBPd',
        spanInst,
        'sd_KS939CFCUCUXLBPd'
      );
    }
  }

  async sd_TJWSr6IsAFaOztlf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TJWSr6IsAFaOztlf',
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
      await this.sd_PCdyOHMYYUDfxOmt(bh, parentSpanInst);
      //appendnew_next_sd_TJWSr6IsAFaOztlf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TJWSr6IsAFaOztlf',
        spanInst,
        'sd_TJWSr6IsAFaOztlf'
      );
    }
  }

  async sd_PCdyOHMYYUDfxOmt(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PCdyOHMYYUDfxOmt');
    }
  }

  async sd_tRnp441d49sLlnHU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tRnp441d49sLlnHU',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tcuyvgcamqrM2W57(bh, parentSpanInst);
      //appendnew_next_sd_tRnp441d49sLlnHU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tRnp441d49sLlnHU',
        spanInst,
        'sd_tRnp441d49sLlnHU'
      );
    }
  }

  async sd_tcuyvgcamqrM2W57(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tcuyvgcamqrM2W57');
    }
  }

  async sd_AbpCG2oP3T6jHvsM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AbpCG2oP3T6jHvsM',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_yrPVgzSJOJcAJSLE(bh, parentSpanInst);
      //appendnew_next_sd_AbpCG2oP3T6jHvsM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AbpCG2oP3T6jHvsM',
        spanInst,
        'sd_AbpCG2oP3T6jHvsM'
      );
    }
  }

  async sd_yrPVgzSJOJcAJSLE(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yrPVgzSJOJcAJSLE');
    }
  }

  async sd_krbWQlainQc39DV6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_krbWQlainQc39DV6',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_krbWQlainQc39DV6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_krbWQlainQc39DV6',
        spanInst,
        'sd_krbWQlainQc39DV6'
      );
    }
  }

  async sd_yMngAXStvZeb4Apb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yMngAXStvZeb4Apb',
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
      bh = await this.sd_TpndSoGWJ8UABdu4(bh, parentSpanInst);
      //appendnew_next_sd_yMngAXStvZeb4Apb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yMngAXStvZeb4Apb',
        spanInst,
        'sd_yMngAXStvZeb4Apb'
      );
    }
  }

  async sd_TpndSoGWJ8UABdu4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TpndSoGWJ8UABdu4',
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
      bh = await this.sd_I21GjmbETbPLxcZj(bh, parentSpanInst);
      //appendnew_next_sd_TpndSoGWJ8UABdu4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TpndSoGWJ8UABdu4',
        spanInst,
        'sd_TpndSoGWJ8UABdu4'
      );
    }
  }

  async sd_I21GjmbETbPLxcZj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_I21GjmbETbPLxcZj',
      parentSpanInst
    );
    try {
      const sd_htNZzTIIY7TR5S8JInstance: sd_htNZzTIIY7TR5S8J.idsutil =
        sd_htNZzTIIY7TR5S8J.idsutil.getInstance();
      let outputVariables =
        await sd_htNZzTIIY7TR5S8JInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sGo7SIxoUzNQbbID(bh, parentSpanInst);
      //appendnew_next_sd_I21GjmbETbPLxcZj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_I21GjmbETbPLxcZj',
        spanInst,
        'sd_I21GjmbETbPLxcZj'
      );
    }
  }

  async sd_sGo7SIxoUzNQbbID(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sGo7SIxoUzNQbbID',
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
        bh = await this.sd_x7eAL4ARf1mVbHZ1(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_t99VVSSJzO7jo7AF(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sGo7SIxoUzNQbbID',
        spanInst,
        'sd_sGo7SIxoUzNQbbID'
      );
    }
  }

  async sd_x7eAL4ARf1mVbHZ1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_x7eAL4ARf1mVbHZ1',
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
      //appendnew_next_sd_x7eAL4ARf1mVbHZ1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x7eAL4ARf1mVbHZ1',
        spanInst,
        'sd_x7eAL4ARf1mVbHZ1'
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
      await this.sd_KUS1bhRM3kbHkOf1(bh, parentSpanInst);
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

  async sd_KUS1bhRM3kbHkOf1(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KUS1bhRM3kbHkOf1');
    }
  }

  async sd_t99VVSSJzO7jo7AF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t99VVSSJzO7jo7AF',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KUS1bhRM3kbHkOf1(bh, parentSpanInst);
      //appendnew_next_sd_t99VVSSJzO7jo7AF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t99VVSSJzO7jo7AF',
        spanInst,
        'sd_t99VVSSJzO7jo7AF'
      );
    }
  }

  async sd_HnopC3TQg84L0f9U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HnopC3TQg84L0f9U',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6GLg3Ls0TfYQINh1(bh, parentSpanInst);
      //appendnew_next_sd_HnopC3TQg84L0f9U
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HnopC3TQg84L0f9U',
        spanInst,
        'sd_HnopC3TQg84L0f9U'
      );
    }
  }

  async sd_6GLg3Ls0TfYQINh1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6GLg3Ls0TfYQINh1',
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
        bh = await this.sd_gSfzeR7ejXCTHEgj(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_4caO4Yk4dUXs7Y5d(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6GLg3Ls0TfYQINh1',
        spanInst,
        'sd_6GLg3Ls0TfYQINh1'
      );
    }
  }

  async sd_gSfzeR7ejXCTHEgj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gSfzeR7ejXCTHEgj',
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
      await this.sd_QtZJYvJEQXNqs216(bh, parentSpanInst);
      //appendnew_next_sd_gSfzeR7ejXCTHEgj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gSfzeR7ejXCTHEgj',
        spanInst,
        'sd_gSfzeR7ejXCTHEgj'
      );
    }
  }

  async sd_QtZJYvJEQXNqs216(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QtZJYvJEQXNqs216');
    }
  }

  async sd_4caO4Yk4dUXs7Y5d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4caO4Yk4dUXs7Y5d',
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
      bh = await this.sd_dfdtBY9UEYmXhARt(bh, parentSpanInst);
      //appendnew_next_sd_4caO4Yk4dUXs7Y5d
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4caO4Yk4dUXs7Y5d',
        spanInst,
        'sd_4caO4Yk4dUXs7Y5d'
      );
    }
  }

  async sd_dfdtBY9UEYmXhARt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dfdtBY9UEYmXhARt',
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
      bh = await this.sd_A4pVEm6VT4rdVdIH(bh, parentSpanInst);
      //appendnew_next_sd_dfdtBY9UEYmXhARt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dfdtBY9UEYmXhARt',
        spanInst,
        'sd_dfdtBY9UEYmXhARt'
      );
    }
  }

  async sd_A4pVEm6VT4rdVdIH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A4pVEm6VT4rdVdIH',
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
        bh = await this.sd_Y0nNpRkOACLbubCK(bh, parentSpanInst);
      } else {
        bh = await this.sd_XysyeKxMZgwTCo9m(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A4pVEm6VT4rdVdIH',
        spanInst,
        'sd_A4pVEm6VT4rdVdIH'
      );
    }
  }

  async sd_Y0nNpRkOACLbubCK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y0nNpRkOACLbubCK',
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
      await this.sd_3otO78n1lOCSrw1P(bh, parentSpanInst);
      //appendnew_next_sd_Y0nNpRkOACLbubCK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y0nNpRkOACLbubCK',
        spanInst,
        'sd_Y0nNpRkOACLbubCK'
      );
    }
  }

  async sd_3otO78n1lOCSrw1P(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3otO78n1lOCSrw1P');
    }
  }

  async sd_XysyeKxMZgwTCo9m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XysyeKxMZgwTCo9m',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_At6saxt8ZxlVyeeL(bh, parentSpanInst);
      //appendnew_next_sd_XysyeKxMZgwTCo9m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XysyeKxMZgwTCo9m',
        spanInst,
        'sd_XysyeKxMZgwTCo9m'
      );
    }
  }

  async sd_At6saxt8ZxlVyeeL(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_At6saxt8ZxlVyeeL');
    }
  }

  async sd_GRfIysP6tOJys5W3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GRfIysP6tOJys5W3',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DPj90lEceLNbVDNr(bh, parentSpanInst);
      //appendnew_next_sd_GRfIysP6tOJys5W3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GRfIysP6tOJys5W3',
        spanInst,
        'sd_GRfIysP6tOJys5W3'
      );
    }
  }

  async sd_DPj90lEceLNbVDNr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DPj90lEceLNbVDNr',
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
      bh = await this.sd_PqW9RLdQ0CZqlOsj(bh, parentSpanInst);
      //appendnew_next_sd_DPj90lEceLNbVDNr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DPj90lEceLNbVDNr',
        spanInst,
        'sd_DPj90lEceLNbVDNr'
      );
    }
  }

  async sd_PqW9RLdQ0CZqlOsj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PqW9RLdQ0CZqlOsj',
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
      bh = await this.sd_dEnrcogqt44vTYb6(bh, parentSpanInst);
      //appendnew_next_sd_PqW9RLdQ0CZqlOsj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PqW9RLdQ0CZqlOsj',
        spanInst,
        'sd_PqW9RLdQ0CZqlOsj'
      );
    }
  }

  async sd_dEnrcogqt44vTYb6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dEnrcogqt44vTYb6',
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
        bh = await this.sd_71HhcHhBaqt9bXow(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_E0erDYCYvQ9EB31u(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dEnrcogqt44vTYb6',
        spanInst,
        'sd_dEnrcogqt44vTYb6'
      );
    }
  }

  async sd_71HhcHhBaqt9bXow(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_71HhcHhBaqt9bXow',
      parentSpanInst
    );
    try {
      const sd_htNZzTIIY7TR5S8JInstance: sd_htNZzTIIY7TR5S8J.idsutil =
        sd_htNZzTIIY7TR5S8J.idsutil.getInstance();
      let outputVariables = await sd_htNZzTIIY7TR5S8JInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NuKvIRZUDB2jDSsp(bh, parentSpanInst);
      //appendnew_next_sd_71HhcHhBaqt9bXow
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_71HhcHhBaqt9bXow',
        spanInst,
        'sd_71HhcHhBaqt9bXow'
      );
    }
  }

  async sd_NuKvIRZUDB2jDSsp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NuKvIRZUDB2jDSsp',
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
        bh = await this.sd_uII8OT8TCq4F7i44(bh, parentSpanInst);
      } else {
        bh = await this.sd_wEztCh9rLJh7TnrC(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NuKvIRZUDB2jDSsp',
        spanInst,
        'sd_NuKvIRZUDB2jDSsp'
      );
    }
  }

  async sd_uII8OT8TCq4F7i44(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uII8OT8TCq4F7i44',
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
      bh = await this.sd_PEaNKOKJLN34fQYb(bh, parentSpanInst);
      //appendnew_next_sd_uII8OT8TCq4F7i44
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uII8OT8TCq4F7i44',
        spanInst,
        'sd_uII8OT8TCq4F7i44'
      );
    }
  }

  async sd_PEaNKOKJLN34fQYb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PEaNKOKJLN34fQYb',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_I4jccspHygFavI7a(bh, parentSpanInst);
      //appendnew_next_sd_PEaNKOKJLN34fQYb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PEaNKOKJLN34fQYb',
        spanInst,
        'sd_PEaNKOKJLN34fQYb'
      );
    }
  }

  async sd_I4jccspHygFavI7a(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_I4jccspHygFavI7a');
    }
  }

  async sd_wEztCh9rLJh7TnrC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wEztCh9rLJh7TnrC',
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
        bh = await this.sd_1CjRW7tzizVluCoL(bh, parentSpanInst);
      } else {
        bh = await this.sd_2cLjQjeicy7tNp1s(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wEztCh9rLJh7TnrC',
        spanInst,
        'sd_wEztCh9rLJh7TnrC'
      );
    }
  }

  async sd_1CjRW7tzizVluCoL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1CjRW7tzizVluCoL',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xeCM631wJRpvNW5w(bh, parentSpanInst);
      //appendnew_next_sd_1CjRW7tzizVluCoL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1CjRW7tzizVluCoL',
        spanInst,
        'sd_1CjRW7tzizVluCoL'
      );
    }
  }

  async sd_xeCM631wJRpvNW5w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xeCM631wJRpvNW5w',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_2cLjQjeicy7tNp1s(bh, parentSpanInst);
      //appendnew_next_sd_xeCM631wJRpvNW5w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xeCM631wJRpvNW5w',
        spanInst,
        'sd_xeCM631wJRpvNW5w'
      );
    }
  }

  async sd_2cLjQjeicy7tNp1s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2cLjQjeicy7tNp1s',
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
        'sd_2cLjQjeicy7tNp1s',
        spanInst,
        'sd_2cLjQjeicy7tNp1s'
      );
    }
  }

  async sd_E0erDYCYvQ9EB31u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E0erDYCYvQ9EB31u',
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
        bh = await this.sd_wtzdFO6RYaoouw0p(bh, parentSpanInst);
      } else {
        bh = await this.sd_PD0EKQo33G8SQQA7(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E0erDYCYvQ9EB31u',
        spanInst,
        'sd_E0erDYCYvQ9EB31u'
      );
    }
  }

  async sd_wtzdFO6RYaoouw0p(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wtzdFO6RYaoouw0p',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_I4jccspHygFavI7a(bh, parentSpanInst);
      //appendnew_next_sd_wtzdFO6RYaoouw0p
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wtzdFO6RYaoouw0p',
        spanInst,
        'sd_wtzdFO6RYaoouw0p'
      );
    }
  }

  async sd_PD0EKQo33G8SQQA7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PD0EKQo33G8SQQA7',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_I4jccspHygFavI7a(bh, parentSpanInst);
      //appendnew_next_sd_PD0EKQo33G8SQQA7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PD0EKQo33G8SQQA7',
        spanInst,
        'sd_PD0EKQo33G8SQQA7'
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
      (await this.sd_igLz5SrgtzPZojU1(bh, parentSpanInst)) ||
      (await this.sd_QPocCBQJyH5jBelA(bh, parentSpanInst))
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
  async sd_igLz5SrgtzPZojU1(bh, parentSpanInst) {
    const nodes = [
      'sd_cf5QTOzVXFHBywcX',
      'sd_EmSSoAe1BpMtf2c8',
      'sd_L1o0Qv3gt5ylEh0Q',
      'sd_9lkUgxXRGUpDpnZr',
      'sd_MK2KNzTg9PMvNb9t',
      'sd_KS939CFCUCUXLBPd',
      'sd_TJWSr6IsAFaOztlf',
      'sd_tRnp441d49sLlnHU',
      'sd_PCdyOHMYYUDfxOmt',
      'sd_tcuyvgcamqrM2W57',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_krbWQlainQc39DV6(bh, parentSpanInst);
      //appendnew_next_sd_igLz5SrgtzPZojU1
      return true;
    }
    return false;
  }
  async sd_QPocCBQJyH5jBelA(bh, parentSpanInst) {
    const nodes = ['sd_71HhcHhBaqt9bXow'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_PEaNKOKJLN34fQYb(bh, parentSpanInst);
      //appendnew_next_sd_QPocCBQJyH5jBelA
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}

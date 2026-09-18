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
import * as sd_r4QvgEigtLDp1dfP from './idsutil'; //_splitter_
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
          bh = await this.sd_Vs0XJy8CAtJS3vSn(bh, parentSpanInst);
          //appendnew_next_sd_iGePEHbwh3sSq0B7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_iGePEHbwh3sSq0B7');
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
          bh = await this.sd_P7axAX4tR5eeoo0s(bh, parentSpanInst);
          //appendnew_next_sd_yuw3IJZ6V2USdCG2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_yuw3IJZ6V2USdCG2');
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
          bh = await this.sd_FRBt3RIwfcxjOIic(bh, parentSpanInst);
          //appendnew_next_sd_9DOAO9Iap2UrY7GK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9DOAO9Iap2UrY7GK');
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
          bh = await this.sd_CFzfzi7amwTaWmYH(bh, parentSpanInst);
          //appendnew_next_sd_46XT82tID9XhounI
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_46XT82tID9XhounI');
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
          bh = await this.sd_DvWptDzZPnItEryv(bh, parentSpanInst);
          //appendnew_next_sd_TcDkfZEJhZNQzYZa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TcDkfZEJhZNQzYZa');
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
          bh = await this.sd_CVY684zQIaISOiKP(bh, parentSpanInst);
          //appendnew_next_sd_a93tBYWhEVDdVAN3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_a93tBYWhEVDdVAN3');
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
          bh = await this.sd_DWBF3c40r9z1xmBI(bh, parentSpanInst);
          //appendnew_next_sd_AzmsEG4jtgjD3TxL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_AzmsEG4jtgjD3TxL');
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

  async sd_FRBt3RIwfcxjOIic(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FRBt3RIwfcxjOIic',
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
      bh = await this.sd_t0cAaDFKn4drZdW2(bh, parentSpanInst);
      //appendnew_next_sd_FRBt3RIwfcxjOIic
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FRBt3RIwfcxjOIic',
        spanInst,
        'sd_FRBt3RIwfcxjOIic'
      );
    }
  }

  async sd_t0cAaDFKn4drZdW2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t0cAaDFKn4drZdW2',
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
        bh = await this.sd_H3a5JNl34hjYxtQ3(bh, parentSpanInst);
      } else {
        bh = await this.sd_KMG437vwUamzOnLC(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t0cAaDFKn4drZdW2',
        spanInst,
        'sd_t0cAaDFKn4drZdW2'
      );
    }
  }

  async sd_H3a5JNl34hjYxtQ3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H3a5JNl34hjYxtQ3',
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
      bh = await this.sd_SjumZhaDVMJ7hGt5(bh, parentSpanInst);
      //appendnew_next_sd_H3a5JNl34hjYxtQ3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H3a5JNl34hjYxtQ3',
        spanInst,
        'sd_H3a5JNl34hjYxtQ3'
      );
    }
  }

  async sd_SjumZhaDVMJ7hGt5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SjumZhaDVMJ7hGt5',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_StINCabC66af3xNC(bh, parentSpanInst);
      //appendnew_next_sd_SjumZhaDVMJ7hGt5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SjumZhaDVMJ7hGt5',
        spanInst,
        'sd_SjumZhaDVMJ7hGt5'
      );
    }
  }

  async sd_StINCabC66af3xNC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_StINCabC66af3xNC',
      parentSpanInst
    );
    try {
      const sd_r4QvgEigtLDp1dfPInstance: sd_r4QvgEigtLDp1dfP.idsutil =
        sd_r4QvgEigtLDp1dfP.idsutil.getInstance();
      let outputVariables =
        await sd_r4QvgEigtLDp1dfPInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DHJa2Jd2nRiRv0KG(bh, parentSpanInst);
      //appendnew_next_sd_StINCabC66af3xNC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_StINCabC66af3xNC',
        spanInst,
        'sd_StINCabC66af3xNC'
      );
    }
  }

  async sd_DHJa2Jd2nRiRv0KG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DHJa2Jd2nRiRv0KG',
      parentSpanInst
    );
    try {
      const sd_r4QvgEigtLDp1dfPInstance: sd_r4QvgEigtLDp1dfP.idsutil =
        sd_r4QvgEigtLDp1dfP.idsutil.getInstance();
      let outputVariables =
        await sd_r4QvgEigtLDp1dfPInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rUw0R6RTYxqooF3Z(bh, parentSpanInst);
      //appendnew_next_sd_DHJa2Jd2nRiRv0KG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DHJa2Jd2nRiRv0KG',
        spanInst,
        'sd_DHJa2Jd2nRiRv0KG'
      );
    }
  }

  async sd_rUw0R6RTYxqooF3Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rUw0R6RTYxqooF3Z',
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
      await this.sd_QNfbpRlz2VKMi5z8(bh, parentSpanInst);
      //appendnew_next_sd_rUw0R6RTYxqooF3Z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rUw0R6RTYxqooF3Z',
        spanInst,
        'sd_rUw0R6RTYxqooF3Z'
      );
    }
  }

  async sd_QNfbpRlz2VKMi5z8(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QNfbpRlz2VKMi5z8');
    }
  }

  async sd_KMG437vwUamzOnLC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KMG437vwUamzOnLC',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_PzEdbg0Qck7OnLkD(bh, parentSpanInst);
      //appendnew_next_sd_KMG437vwUamzOnLC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KMG437vwUamzOnLC',
        spanInst,
        'sd_KMG437vwUamzOnLC'
      );
    }
  }

  async sd_PzEdbg0Qck7OnLkD(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PzEdbg0Qck7OnLkD');
    }
  }

  async sd_Vs0XJy8CAtJS3vSn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vs0XJy8CAtJS3vSn',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_0w5XjPvrrMQL2ax4(bh, parentSpanInst);
      //appendnew_next_sd_Vs0XJy8CAtJS3vSn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vs0XJy8CAtJS3vSn',
        spanInst,
        'sd_Vs0XJy8CAtJS3vSn'
      );
    }
  }

  async sd_0w5XjPvrrMQL2ax4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0w5XjPvrrMQL2ax4',
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
        'sd_0w5XjPvrrMQL2ax4',
        spanInst,
        'sd_0w5XjPvrrMQL2ax4'
      );
    }
  }

  async sd_CFzfzi7amwTaWmYH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CFzfzi7amwTaWmYH',
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
      bh = await this.sd_5UenmqSH4t8gfd2v(bh, parentSpanInst);
      //appendnew_next_sd_CFzfzi7amwTaWmYH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CFzfzi7amwTaWmYH',
        spanInst,
        'sd_CFzfzi7amwTaWmYH'
      );
    }
  }

  async sd_5UenmqSH4t8gfd2v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5UenmqSH4t8gfd2v',
      parentSpanInst
    );
    try {
      const sd_r4QvgEigtLDp1dfPInstance: sd_r4QvgEigtLDp1dfP.idsutil =
        sd_r4QvgEigtLDp1dfP.idsutil.getInstance();
      let outputVariables =
        await sd_r4QvgEigtLDp1dfPInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fawTHtnuc1FcZFPu(bh, parentSpanInst);
      //appendnew_next_sd_5UenmqSH4t8gfd2v
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5UenmqSH4t8gfd2v',
        spanInst,
        'sd_5UenmqSH4t8gfd2v'
      );
    }
  }

  async sd_fawTHtnuc1FcZFPu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fawTHtnuc1FcZFPu',
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
      bh = await this.sd_J7ZN6efbgOxjAO2C(bh, parentSpanInst);
      //appendnew_next_sd_fawTHtnuc1FcZFPu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fawTHtnuc1FcZFPu',
        spanInst,
        'sd_fawTHtnuc1FcZFPu'
      );
    }
  }

  async sd_J7ZN6efbgOxjAO2C(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J7ZN6efbgOxjAO2C',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2yI1mbs4xuMtc3cA(bh, parentSpanInst);
      //appendnew_next_sd_J7ZN6efbgOxjAO2C
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J7ZN6efbgOxjAO2C',
        spanInst,
        'sd_J7ZN6efbgOxjAO2C'
      );
    }
  }

  async sd_2yI1mbs4xuMtc3cA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2yI1mbs4xuMtc3cA',
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
        bh = await this.sd_xgRlGpSS5UJXpoXa(bh, parentSpanInst);
      } else {
        bh = await this.sd_9uLUlvml1I9W1H41(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2yI1mbs4xuMtc3cA',
        spanInst,
        'sd_2yI1mbs4xuMtc3cA'
      );
    }
  }

  async sd_xgRlGpSS5UJXpoXa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xgRlGpSS5UJXpoXa',
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
      await this.sd_tWYQuIF9TObjtoor(bh, parentSpanInst);
      //appendnew_next_sd_xgRlGpSS5UJXpoXa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xgRlGpSS5UJXpoXa',
        spanInst,
        'sd_xgRlGpSS5UJXpoXa'
      );
    }
  }

  async sd_tWYQuIF9TObjtoor(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tWYQuIF9TObjtoor');
    }
  }

  async sd_9uLUlvml1I9W1H41(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9uLUlvml1I9W1H41',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Gd1kUqzCaL9AzSyr(bh, parentSpanInst);
      //appendnew_next_sd_9uLUlvml1I9W1H41
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9uLUlvml1I9W1H41',
        spanInst,
        'sd_9uLUlvml1I9W1H41'
      );
    }
  }

  async sd_Gd1kUqzCaL9AzSyr(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Gd1kUqzCaL9AzSyr');
    }
  }

  async sd_DvWptDzZPnItEryv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DvWptDzZPnItEryv',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_Xmgc4hJiw98kuhGQ(bh, parentSpanInst);
      //appendnew_next_sd_DvWptDzZPnItEryv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DvWptDzZPnItEryv',
        spanInst,
        'sd_DvWptDzZPnItEryv'
      );
    }
  }

  async sd_Xmgc4hJiw98kuhGQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Xmgc4hJiw98kuhGQ');
    }
  }

  async sd_GIw8t4o79VeTFbmb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GIw8t4o79VeTFbmb',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_GIw8t4o79VeTFbmb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GIw8t4o79VeTFbmb',
        spanInst,
        'sd_GIw8t4o79VeTFbmb'
      );
    }
  }

  async sd_CVY684zQIaISOiKP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CVY684zQIaISOiKP',
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
      bh = await this.sd_ZsoKHG0el52t5fIG(bh, parentSpanInst);
      //appendnew_next_sd_CVY684zQIaISOiKP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CVY684zQIaISOiKP',
        spanInst,
        'sd_CVY684zQIaISOiKP'
      );
    }
  }

  async sd_ZsoKHG0el52t5fIG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZsoKHG0el52t5fIG',
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
      bh = await this.sd_f4nUmp7kwnLWCk7x(bh, parentSpanInst);
      //appendnew_next_sd_ZsoKHG0el52t5fIG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZsoKHG0el52t5fIG',
        spanInst,
        'sd_ZsoKHG0el52t5fIG'
      );
    }
  }

  async sd_f4nUmp7kwnLWCk7x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_f4nUmp7kwnLWCk7x',
      parentSpanInst
    );
    try {
      const sd_r4QvgEigtLDp1dfPInstance: sd_r4QvgEigtLDp1dfP.idsutil =
        sd_r4QvgEigtLDp1dfP.idsutil.getInstance();
      let outputVariables =
        await sd_r4QvgEigtLDp1dfPInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tHJeWdWH5TzJnRcm(bh, parentSpanInst);
      //appendnew_next_sd_f4nUmp7kwnLWCk7x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f4nUmp7kwnLWCk7x',
        spanInst,
        'sd_f4nUmp7kwnLWCk7x'
      );
    }
  }

  async sd_tHJeWdWH5TzJnRcm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tHJeWdWH5TzJnRcm',
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
        bh = await this.sd_y5dhmFPdxXfcKcoe(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_9GV9Wz8dp3iQrgkF(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tHJeWdWH5TzJnRcm',
        spanInst,
        'sd_tHJeWdWH5TzJnRcm'
      );
    }
  }

  async sd_y5dhmFPdxXfcKcoe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y5dhmFPdxXfcKcoe',
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
      //appendnew_next_sd_y5dhmFPdxXfcKcoe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y5dhmFPdxXfcKcoe',
        spanInst,
        'sd_y5dhmFPdxXfcKcoe'
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
      await this.sd_HIkMsUhrBUfA8Xwn(bh, parentSpanInst);
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

  async sd_HIkMsUhrBUfA8Xwn(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HIkMsUhrBUfA8Xwn');
    }
  }

  async sd_9GV9Wz8dp3iQrgkF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9GV9Wz8dp3iQrgkF',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HIkMsUhrBUfA8Xwn(bh, parentSpanInst);
      //appendnew_next_sd_9GV9Wz8dp3iQrgkF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9GV9Wz8dp3iQrgkF',
        spanInst,
        'sd_9GV9Wz8dp3iQrgkF'
      );
    }
  }

  async sd_DWBF3c40r9z1xmBI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DWBF3c40r9z1xmBI',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AYt8ifFdr5uE4Tpc(bh, parentSpanInst);
      //appendnew_next_sd_DWBF3c40r9z1xmBI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DWBF3c40r9z1xmBI',
        spanInst,
        'sd_DWBF3c40r9z1xmBI'
      );
    }
  }

  async sd_AYt8ifFdr5uE4Tpc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AYt8ifFdr5uE4Tpc',
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
        bh = await this.sd_d8ZXnzdd0rECv5iE(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_0QAnYvaXSFytWrHi(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AYt8ifFdr5uE4Tpc',
        spanInst,
        'sd_AYt8ifFdr5uE4Tpc'
      );
    }
  }

  async sd_d8ZXnzdd0rECv5iE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_d8ZXnzdd0rECv5iE',
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
      await this.sd_myvsAu3OfVL03grz(bh, parentSpanInst);
      //appendnew_next_sd_d8ZXnzdd0rECv5iE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d8ZXnzdd0rECv5iE',
        spanInst,
        'sd_d8ZXnzdd0rECv5iE'
      );
    }
  }

  async sd_myvsAu3OfVL03grz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_myvsAu3OfVL03grz');
    }
  }

  async sd_0QAnYvaXSFytWrHi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0QAnYvaXSFytWrHi',
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
      bh = await this.sd_RZecx3yUniXrviIC(bh, parentSpanInst);
      //appendnew_next_sd_0QAnYvaXSFytWrHi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0QAnYvaXSFytWrHi',
        spanInst,
        'sd_0QAnYvaXSFytWrHi'
      );
    }
  }

  async sd_RZecx3yUniXrviIC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RZecx3yUniXrviIC',
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
      bh = await this.sd_OV8RWoFMohMQGwRS(bh, parentSpanInst);
      //appendnew_next_sd_RZecx3yUniXrviIC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RZecx3yUniXrviIC',
        spanInst,
        'sd_RZecx3yUniXrviIC'
      );
    }
  }

  async sd_OV8RWoFMohMQGwRS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OV8RWoFMohMQGwRS',
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
        bh = await this.sd_EFsPvre958ANzF3p(bh, parentSpanInst);
      } else {
        bh = await this.sd_E1tN261Hy8sbgPR3(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OV8RWoFMohMQGwRS',
        spanInst,
        'sd_OV8RWoFMohMQGwRS'
      );
    }
  }

  async sd_EFsPvre958ANzF3p(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EFsPvre958ANzF3p',
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
      await this.sd_PNbQLMsTJzOA0DZH(bh, parentSpanInst);
      //appendnew_next_sd_EFsPvre958ANzF3p
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EFsPvre958ANzF3p',
        spanInst,
        'sd_EFsPvre958ANzF3p'
      );
    }
  }

  async sd_PNbQLMsTJzOA0DZH(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PNbQLMsTJzOA0DZH');
    }
  }

  async sd_E1tN261Hy8sbgPR3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E1tN261Hy8sbgPR3',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TNyFT68yxzBZztTg(bh, parentSpanInst);
      //appendnew_next_sd_E1tN261Hy8sbgPR3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E1tN261Hy8sbgPR3',
        spanInst,
        'sd_E1tN261Hy8sbgPR3'
      );
    }
  }

  async sd_TNyFT68yxzBZztTg(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TNyFT68yxzBZztTg');
    }
  }

  async sd_P7axAX4tR5eeoo0s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P7axAX4tR5eeoo0s',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_l7JyZVJgvkXd86w3(bh, parentSpanInst);
      //appendnew_next_sd_P7axAX4tR5eeoo0s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P7axAX4tR5eeoo0s',
        spanInst,
        'sd_P7axAX4tR5eeoo0s'
      );
    }
  }

  async sd_l7JyZVJgvkXd86w3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l7JyZVJgvkXd86w3',
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
      bh = await this.sd_Z1RgvQk5xgKavB9m(bh, parentSpanInst);
      //appendnew_next_sd_l7JyZVJgvkXd86w3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l7JyZVJgvkXd86w3',
        spanInst,
        'sd_l7JyZVJgvkXd86w3'
      );
    }
  }

  async sd_Z1RgvQk5xgKavB9m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Z1RgvQk5xgKavB9m',
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
      bh = await this.sd_RBiAMRHtG5eZYWTK(bh, parentSpanInst);
      //appendnew_next_sd_Z1RgvQk5xgKavB9m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z1RgvQk5xgKavB9m',
        spanInst,
        'sd_Z1RgvQk5xgKavB9m'
      );
    }
  }

  async sd_RBiAMRHtG5eZYWTK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RBiAMRHtG5eZYWTK',
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
        bh = await this.sd_XCG0pbVL6GrhN6dw(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_F4RDpX18aLVCipNq(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RBiAMRHtG5eZYWTK',
        spanInst,
        'sd_RBiAMRHtG5eZYWTK'
      );
    }
  }

  async sd_XCG0pbVL6GrhN6dw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XCG0pbVL6GrhN6dw',
      parentSpanInst
    );
    try {
      const sd_r4QvgEigtLDp1dfPInstance: sd_r4QvgEigtLDp1dfP.idsutil =
        sd_r4QvgEigtLDp1dfP.idsutil.getInstance();
      let outputVariables = await sd_r4QvgEigtLDp1dfPInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eYHl5kiQi82PHOCV(bh, parentSpanInst);
      //appendnew_next_sd_XCG0pbVL6GrhN6dw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XCG0pbVL6GrhN6dw',
        spanInst,
        'sd_XCG0pbVL6GrhN6dw'
      );
    }
  }

  async sd_eYHl5kiQi82PHOCV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eYHl5kiQi82PHOCV',
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
        bh = await this.sd_RC3gxTEOgDVwEhhn(bh, parentSpanInst);
      } else {
        bh = await this.sd_6X8Db7QO2XvWnbg6(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eYHl5kiQi82PHOCV',
        spanInst,
        'sd_eYHl5kiQi82PHOCV'
      );
    }
  }

  async sd_RC3gxTEOgDVwEhhn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RC3gxTEOgDVwEhhn',
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
      bh = await this.sd_mljxMIEJfVCL0QiA(bh, parentSpanInst);
      //appendnew_next_sd_RC3gxTEOgDVwEhhn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RC3gxTEOgDVwEhhn',
        spanInst,
        'sd_RC3gxTEOgDVwEhhn'
      );
    }
  }

  async sd_mljxMIEJfVCL0QiA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mljxMIEJfVCL0QiA',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_nsJGgQV5FDfYuqrR(bh, parentSpanInst);
      //appendnew_next_sd_mljxMIEJfVCL0QiA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mljxMIEJfVCL0QiA',
        spanInst,
        'sd_mljxMIEJfVCL0QiA'
      );
    }
  }

  async sd_nsJGgQV5FDfYuqrR(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nsJGgQV5FDfYuqrR');
    }
  }

  async sd_6X8Db7QO2XvWnbg6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6X8Db7QO2XvWnbg6',
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
        bh = await this.sd_wCC2a7Re7tSaRTft(bh, parentSpanInst);
      } else {
        bh = await this.sd_dtIJQ9ri3FfLpm4C(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6X8Db7QO2XvWnbg6',
        spanInst,
        'sd_6X8Db7QO2XvWnbg6'
      );
    }
  }

  async sd_wCC2a7Re7tSaRTft(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wCC2a7Re7tSaRTft',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2ks4ZvZssafxb8do(bh, parentSpanInst);
      //appendnew_next_sd_wCC2a7Re7tSaRTft
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wCC2a7Re7tSaRTft',
        spanInst,
        'sd_wCC2a7Re7tSaRTft'
      );
    }
  }

  async sd_2ks4ZvZssafxb8do(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2ks4ZvZssafxb8do',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dtIJQ9ri3FfLpm4C(bh, parentSpanInst);
      //appendnew_next_sd_2ks4ZvZssafxb8do
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2ks4ZvZssafxb8do',
        spanInst,
        'sd_2ks4ZvZssafxb8do'
      );
    }
  }

  async sd_dtIJQ9ri3FfLpm4C(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dtIJQ9ri3FfLpm4C',
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
        'sd_dtIJQ9ri3FfLpm4C',
        spanInst,
        'sd_dtIJQ9ri3FfLpm4C'
      );
    }
  }

  async sd_F4RDpX18aLVCipNq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_F4RDpX18aLVCipNq',
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
        bh = await this.sd_EHMt9TPVQ4OiNPCy(bh, parentSpanInst);
      } else {
        bh = await this.sd_WmkhLQWMV2y2MbcR(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F4RDpX18aLVCipNq',
        spanInst,
        'sd_F4RDpX18aLVCipNq'
      );
    }
  }

  async sd_EHMt9TPVQ4OiNPCy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EHMt9TPVQ4OiNPCy',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_nsJGgQV5FDfYuqrR(bh, parentSpanInst);
      //appendnew_next_sd_EHMt9TPVQ4OiNPCy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EHMt9TPVQ4OiNPCy',
        spanInst,
        'sd_EHMt9TPVQ4OiNPCy'
      );
    }
  }

  async sd_WmkhLQWMV2y2MbcR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WmkhLQWMV2y2MbcR',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_nsJGgQV5FDfYuqrR(bh, parentSpanInst);
      //appendnew_next_sd_WmkhLQWMV2y2MbcR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WmkhLQWMV2y2MbcR',
        spanInst,
        'sd_WmkhLQWMV2y2MbcR'
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
      (await this.sd_aGJys2rKuBr3hfMm(bh, parentSpanInst)) ||
      (await this.sd_sqA2qzF04HAVLm6t(bh, parentSpanInst))
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
  async sd_aGJys2rKuBr3hfMm(bh, parentSpanInst) {
    const nodes = [
      'sd_DHJa2Jd2nRiRv0KG',
      'sd_46XT82tID9XhounI',
      'sd_5UenmqSH4t8gfd2v',
      'sd_fawTHtnuc1FcZFPu',
      'sd_CFzfzi7amwTaWmYH',
      'sd_2yI1mbs4xuMtc3cA',
      'sd_xgRlGpSS5UJXpoXa',
      'sd_9uLUlvml1I9W1H41',
      'sd_tWYQuIF9TObjtoor',
      'sd_Gd1kUqzCaL9AzSyr',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_GIw8t4o79VeTFbmb(bh, parentSpanInst);
      //appendnew_next_sd_aGJys2rKuBr3hfMm
      return true;
    }
    return false;
  }
  async sd_sqA2qzF04HAVLm6t(bh, parentSpanInst) {
    const nodes = ['sd_XCG0pbVL6GrhN6dw'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_mljxMIEJfVCL0QiA(bh, parentSpanInst);
      //appendnew_next_sd_sqA2qzF04HAVLm6t
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}

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
import * as sd_Y8ImhPJZLuQp0NVU from './idsutil'; //_splitter_
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
          bh = await this.sd_QYien0qj6Vesdcdj(bh, parentSpanInst);
          //appendnew_next_sd_ACr5agkzrW1lhnTk
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ACr5agkzrW1lhnTk');
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
          bh = await this.sd_RivTXTfgYZdvGuwR(bh, parentSpanInst);
          //appendnew_next_sd_7c2qOsVf1Zori67o
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7c2qOsVf1Zori67o');
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
          bh = await this.sd_j7aIopwdIOcVaZRl(bh, parentSpanInst);
          //appendnew_next_sd_pLi0ck06pC5Ut4xl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pLi0ck06pC5Ut4xl');
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
          bh = await this.sd_iRF17VsDbTfCEgpc(bh, parentSpanInst);
          //appendnew_next_sd_5MB8DCxXB2rkW2zd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5MB8DCxXB2rkW2zd');
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
          bh = await this.sd_Kp0z0KeQ306XpRq1(bh, parentSpanInst);
          //appendnew_next_sd_H5NNIc8OeUwbRKbR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_H5NNIc8OeUwbRKbR');
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
          bh = await this.sd_CcAJfwTdik73fOMY(bh, parentSpanInst);
          //appendnew_next_sd_3pGE45C1WVGCqBvq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3pGE45C1WVGCqBvq');
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
          bh = await this.sd_Qnz480BrukZJZY12(bh, parentSpanInst);
          //appendnew_next_sd_NuQ8LcL8Qy4vkjrv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NuQ8LcL8Qy4vkjrv');
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

  async sd_j7aIopwdIOcVaZRl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j7aIopwdIOcVaZRl',
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
      bh = await this.sd_7lg2x4uUspDVM0uZ(bh, parentSpanInst);
      //appendnew_next_sd_j7aIopwdIOcVaZRl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j7aIopwdIOcVaZRl',
        spanInst,
        'sd_j7aIopwdIOcVaZRl'
      );
    }
  }

  async sd_7lg2x4uUspDVM0uZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7lg2x4uUspDVM0uZ',
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
        bh = await this.sd_eYbRKmDYVDKeJZel(bh, parentSpanInst);
      } else {
        bh = await this.sd_i3N8zDQJFdqTtAju(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7lg2x4uUspDVM0uZ',
        spanInst,
        'sd_7lg2x4uUspDVM0uZ'
      );
    }
  }

  async sd_eYbRKmDYVDKeJZel(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eYbRKmDYVDKeJZel',
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
      bh = await this.sd_o4Ln4HRjrLcrAuWy(bh, parentSpanInst);
      //appendnew_next_sd_eYbRKmDYVDKeJZel
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eYbRKmDYVDKeJZel',
        spanInst,
        'sd_eYbRKmDYVDKeJZel'
      );
    }
  }

  async sd_o4Ln4HRjrLcrAuWy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_o4Ln4HRjrLcrAuWy',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jG6avHnFjMu8yKBU(bh, parentSpanInst);
      //appendnew_next_sd_o4Ln4HRjrLcrAuWy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o4Ln4HRjrLcrAuWy',
        spanInst,
        'sd_o4Ln4HRjrLcrAuWy'
      );
    }
  }

  async sd_jG6avHnFjMu8yKBU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jG6avHnFjMu8yKBU',
      parentSpanInst
    );
    try {
      const sd_Y8ImhPJZLuQp0NVUInstance: sd_Y8ImhPJZLuQp0NVU.idsutil =
        sd_Y8ImhPJZLuQp0NVU.idsutil.getInstance();
      let outputVariables =
        await sd_Y8ImhPJZLuQp0NVUInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4oDsCfQoL2sFpzot(bh, parentSpanInst);
      //appendnew_next_sd_jG6avHnFjMu8yKBU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jG6avHnFjMu8yKBU',
        spanInst,
        'sd_jG6avHnFjMu8yKBU'
      );
    }
  }

  async sd_4oDsCfQoL2sFpzot(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4oDsCfQoL2sFpzot',
      parentSpanInst
    );
    try {
      const sd_Y8ImhPJZLuQp0NVUInstance: sd_Y8ImhPJZLuQp0NVU.idsutil =
        sd_Y8ImhPJZLuQp0NVU.idsutil.getInstance();
      let outputVariables =
        await sd_Y8ImhPJZLuQp0NVUInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GISn7VqL5O00ipbI(bh, parentSpanInst);
      //appendnew_next_sd_4oDsCfQoL2sFpzot
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4oDsCfQoL2sFpzot',
        spanInst,
        'sd_4oDsCfQoL2sFpzot'
      );
    }
  }

  async sd_GISn7VqL5O00ipbI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GISn7VqL5O00ipbI',
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
      await this.sd_ac5oQXLmCYb4fr1u(bh, parentSpanInst);
      //appendnew_next_sd_GISn7VqL5O00ipbI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GISn7VqL5O00ipbI',
        spanInst,
        'sd_GISn7VqL5O00ipbI'
      );
    }
  }

  async sd_ac5oQXLmCYb4fr1u(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ac5oQXLmCYb4fr1u');
    }
  }

  async sd_i3N8zDQJFdqTtAju(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i3N8zDQJFdqTtAju',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_qFfE3B5B2gSLQBCe(bh, parentSpanInst);
      //appendnew_next_sd_i3N8zDQJFdqTtAju
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i3N8zDQJFdqTtAju',
        spanInst,
        'sd_i3N8zDQJFdqTtAju'
      );
    }
  }

  async sd_qFfE3B5B2gSLQBCe(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qFfE3B5B2gSLQBCe');
    }
  }

  async sd_QYien0qj6Vesdcdj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QYien0qj6Vesdcdj',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_q0TXjPS11fFOX4Mw(bh, parentSpanInst);
      //appendnew_next_sd_QYien0qj6Vesdcdj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QYien0qj6Vesdcdj',
        spanInst,
        'sd_QYien0qj6Vesdcdj'
      );
    }
  }

  async sd_q0TXjPS11fFOX4Mw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_q0TXjPS11fFOX4Mw',
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
        'sd_q0TXjPS11fFOX4Mw',
        spanInst,
        'sd_q0TXjPS11fFOX4Mw'
      );
    }
  }

  async sd_iRF17VsDbTfCEgpc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iRF17VsDbTfCEgpc',
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
      bh = await this.sd_NgkGlt2QQrarzkwx(bh, parentSpanInst);
      //appendnew_next_sd_iRF17VsDbTfCEgpc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iRF17VsDbTfCEgpc',
        spanInst,
        'sd_iRF17VsDbTfCEgpc'
      );
    }
  }

  async sd_NgkGlt2QQrarzkwx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NgkGlt2QQrarzkwx',
      parentSpanInst
    );
    try {
      const sd_Y8ImhPJZLuQp0NVUInstance: sd_Y8ImhPJZLuQp0NVU.idsutil =
        sd_Y8ImhPJZLuQp0NVU.idsutil.getInstance();
      let outputVariables =
        await sd_Y8ImhPJZLuQp0NVUInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_w6rFhGHDIxaBPIJC(bh, parentSpanInst);
      //appendnew_next_sd_NgkGlt2QQrarzkwx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NgkGlt2QQrarzkwx',
        spanInst,
        'sd_NgkGlt2QQrarzkwx'
      );
    }
  }

  async sd_w6rFhGHDIxaBPIJC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_w6rFhGHDIxaBPIJC',
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
      bh = await this.sd_2Xcy4qQgDpRoYyfC(bh, parentSpanInst);
      //appendnew_next_sd_w6rFhGHDIxaBPIJC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_w6rFhGHDIxaBPIJC',
        spanInst,
        'sd_w6rFhGHDIxaBPIJC'
      );
    }
  }

  async sd_2Xcy4qQgDpRoYyfC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2Xcy4qQgDpRoYyfC',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VrVYUASyy9ycabxI(bh, parentSpanInst);
      //appendnew_next_sd_2Xcy4qQgDpRoYyfC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2Xcy4qQgDpRoYyfC',
        spanInst,
        'sd_2Xcy4qQgDpRoYyfC'
      );
    }
  }

  async sd_VrVYUASyy9ycabxI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VrVYUASyy9ycabxI',
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
        bh = await this.sd_9z5wN20UZzsqH4lY(bh, parentSpanInst);
      } else {
        bh = await this.sd_u42J18J6vqbLxOe8(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VrVYUASyy9ycabxI',
        spanInst,
        'sd_VrVYUASyy9ycabxI'
      );
    }
  }

  async sd_9z5wN20UZzsqH4lY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9z5wN20UZzsqH4lY',
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
      await this.sd_FcQRplvNi9WkQhr6(bh, parentSpanInst);
      //appendnew_next_sd_9z5wN20UZzsqH4lY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9z5wN20UZzsqH4lY',
        spanInst,
        'sd_9z5wN20UZzsqH4lY'
      );
    }
  }

  async sd_FcQRplvNi9WkQhr6(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FcQRplvNi9WkQhr6');
    }
  }

  async sd_u42J18J6vqbLxOe8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_u42J18J6vqbLxOe8',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Qa2Vq3HW7Up7kva2(bh, parentSpanInst);
      //appendnew_next_sd_u42J18J6vqbLxOe8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u42J18J6vqbLxOe8',
        spanInst,
        'sd_u42J18J6vqbLxOe8'
      );
    }
  }

  async sd_Qa2Vq3HW7Up7kva2(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qa2Vq3HW7Up7kva2');
    }
  }

  async sd_Kp0z0KeQ306XpRq1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Kp0z0KeQ306XpRq1',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_hqY2dbR67QPIFVBz(bh, parentSpanInst);
      //appendnew_next_sd_Kp0z0KeQ306XpRq1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Kp0z0KeQ306XpRq1',
        spanInst,
        'sd_Kp0z0KeQ306XpRq1'
      );
    }
  }

  async sd_hqY2dbR67QPIFVBz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hqY2dbR67QPIFVBz');
    }
  }

  async sd_8wLFLu1kLZixFfbj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8wLFLu1kLZixFfbj',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_8wLFLu1kLZixFfbj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8wLFLu1kLZixFfbj',
        spanInst,
        'sd_8wLFLu1kLZixFfbj'
      );
    }
  }

  async sd_CcAJfwTdik73fOMY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CcAJfwTdik73fOMY',
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
      bh = await this.sd_dENkhjZXpTIMbBmR(bh, parentSpanInst);
      //appendnew_next_sd_CcAJfwTdik73fOMY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CcAJfwTdik73fOMY',
        spanInst,
        'sd_CcAJfwTdik73fOMY'
      );
    }
  }

  async sd_dENkhjZXpTIMbBmR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dENkhjZXpTIMbBmR',
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
      bh = await this.sd_tMJDqaPwSaDLrKhU(bh, parentSpanInst);
      //appendnew_next_sd_dENkhjZXpTIMbBmR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dENkhjZXpTIMbBmR',
        spanInst,
        'sd_dENkhjZXpTIMbBmR'
      );
    }
  }

  async sd_tMJDqaPwSaDLrKhU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tMJDqaPwSaDLrKhU',
      parentSpanInst
    );
    try {
      const sd_Y8ImhPJZLuQp0NVUInstance: sd_Y8ImhPJZLuQp0NVU.idsutil =
        sd_Y8ImhPJZLuQp0NVU.idsutil.getInstance();
      let outputVariables =
        await sd_Y8ImhPJZLuQp0NVUInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_H0mLCG3e6z0eTwjg(bh, parentSpanInst);
      //appendnew_next_sd_tMJDqaPwSaDLrKhU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tMJDqaPwSaDLrKhU',
        spanInst,
        'sd_tMJDqaPwSaDLrKhU'
      );
    }
  }

  async sd_H0mLCG3e6z0eTwjg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H0mLCG3e6z0eTwjg',
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
        bh = await this.sd_uw0jMrwQUWLeHj4t(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_3qTSJBwINWLhQiXG(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H0mLCG3e6z0eTwjg',
        spanInst,
        'sd_H0mLCG3e6z0eTwjg'
      );
    }
  }

  async sd_uw0jMrwQUWLeHj4t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uw0jMrwQUWLeHj4t',
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
      //appendnew_next_sd_uw0jMrwQUWLeHj4t
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uw0jMrwQUWLeHj4t',
        spanInst,
        'sd_uw0jMrwQUWLeHj4t'
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
      await this.sd_lV5fqnk8Xq9XuWOE(bh, parentSpanInst);
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

  async sd_lV5fqnk8Xq9XuWOE(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lV5fqnk8Xq9XuWOE');
    }
  }

  async sd_3qTSJBwINWLhQiXG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3qTSJBwINWLhQiXG',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lV5fqnk8Xq9XuWOE(bh, parentSpanInst);
      //appendnew_next_sd_3qTSJBwINWLhQiXG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3qTSJBwINWLhQiXG',
        spanInst,
        'sd_3qTSJBwINWLhQiXG'
      );
    }
  }

  async sd_Qnz480BrukZJZY12(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Qnz480BrukZJZY12',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VKyD2h75fky6DAhE(bh, parentSpanInst);
      //appendnew_next_sd_Qnz480BrukZJZY12
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Qnz480BrukZJZY12',
        spanInst,
        'sd_Qnz480BrukZJZY12'
      );
    }
  }

  async sd_VKyD2h75fky6DAhE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VKyD2h75fky6DAhE',
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
        bh = await this.sd_ZTHHdKyWHVbrjsEU(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Vh9sVKpJ6JuQ0LUk(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VKyD2h75fky6DAhE',
        spanInst,
        'sd_VKyD2h75fky6DAhE'
      );
    }
  }

  async sd_ZTHHdKyWHVbrjsEU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZTHHdKyWHVbrjsEU',
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
      await this.sd_EXLJj7YorCIiVTc7(bh, parentSpanInst);
      //appendnew_next_sd_ZTHHdKyWHVbrjsEU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZTHHdKyWHVbrjsEU',
        spanInst,
        'sd_ZTHHdKyWHVbrjsEU'
      );
    }
  }

  async sd_EXLJj7YorCIiVTc7(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EXLJj7YorCIiVTc7');
    }
  }

  async sd_Vh9sVKpJ6JuQ0LUk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vh9sVKpJ6JuQ0LUk',
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
      bh = await this.sd_qfyB11ZyKYQiAqVh(bh, parentSpanInst);
      //appendnew_next_sd_Vh9sVKpJ6JuQ0LUk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vh9sVKpJ6JuQ0LUk',
        spanInst,
        'sd_Vh9sVKpJ6JuQ0LUk'
      );
    }
  }

  async sd_qfyB11ZyKYQiAqVh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qfyB11ZyKYQiAqVh',
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
      bh = await this.sd_fVpEuX2KrH69w279(bh, parentSpanInst);
      //appendnew_next_sd_qfyB11ZyKYQiAqVh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qfyB11ZyKYQiAqVh',
        spanInst,
        'sd_qfyB11ZyKYQiAqVh'
      );
    }
  }

  async sd_fVpEuX2KrH69w279(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fVpEuX2KrH69w279',
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
        bh = await this.sd_E03HJ9WZmwFQrZe0(bh, parentSpanInst);
      } else {
        bh = await this.sd_hFSaeD2GcxTtXZ6y(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fVpEuX2KrH69w279',
        spanInst,
        'sd_fVpEuX2KrH69w279'
      );
    }
  }

  async sd_E03HJ9WZmwFQrZe0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E03HJ9WZmwFQrZe0',
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
      await this.sd_KmGECXxJJIcpfFXG(bh, parentSpanInst);
      //appendnew_next_sd_E03HJ9WZmwFQrZe0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E03HJ9WZmwFQrZe0',
        spanInst,
        'sd_E03HJ9WZmwFQrZe0'
      );
    }
  }

  async sd_KmGECXxJJIcpfFXG(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KmGECXxJJIcpfFXG');
    }
  }

  async sd_hFSaeD2GcxTtXZ6y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hFSaeD2GcxTtXZ6y',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_SrLaJXA91SBJ4OvP(bh, parentSpanInst);
      //appendnew_next_sd_hFSaeD2GcxTtXZ6y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hFSaeD2GcxTtXZ6y',
        spanInst,
        'sd_hFSaeD2GcxTtXZ6y'
      );
    }
  }

  async sd_SrLaJXA91SBJ4OvP(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SrLaJXA91SBJ4OvP');
    }
  }

  async sd_RivTXTfgYZdvGuwR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RivTXTfgYZdvGuwR',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_p6nSbmyCtz5hb8nM(bh, parentSpanInst);
      //appendnew_next_sd_RivTXTfgYZdvGuwR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RivTXTfgYZdvGuwR',
        spanInst,
        'sd_RivTXTfgYZdvGuwR'
      );
    }
  }

  async sd_p6nSbmyCtz5hb8nM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_p6nSbmyCtz5hb8nM',
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
      bh = await this.sd_bIaBxCAvlXQ2EwaO(bh, parentSpanInst);
      //appendnew_next_sd_p6nSbmyCtz5hb8nM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p6nSbmyCtz5hb8nM',
        spanInst,
        'sd_p6nSbmyCtz5hb8nM'
      );
    }
  }

  async sd_bIaBxCAvlXQ2EwaO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bIaBxCAvlXQ2EwaO',
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
      bh = await this.sd_vIXO4u5nV8iNf36o(bh, parentSpanInst);
      //appendnew_next_sd_bIaBxCAvlXQ2EwaO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bIaBxCAvlXQ2EwaO',
        spanInst,
        'sd_bIaBxCAvlXQ2EwaO'
      );
    }
  }

  async sd_vIXO4u5nV8iNf36o(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vIXO4u5nV8iNf36o',
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
        bh = await this.sd_KysKK5byFR9gRTnG(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_SNPY0hiObQAz2Q8N(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vIXO4u5nV8iNf36o',
        spanInst,
        'sd_vIXO4u5nV8iNf36o'
      );
    }
  }

  async sd_KysKK5byFR9gRTnG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KysKK5byFR9gRTnG',
      parentSpanInst
    );
    try {
      const sd_Y8ImhPJZLuQp0NVUInstance: sd_Y8ImhPJZLuQp0NVU.idsutil =
        sd_Y8ImhPJZLuQp0NVU.idsutil.getInstance();
      let outputVariables = await sd_Y8ImhPJZLuQp0NVUInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6dFRuRUZnbvrAzIr(bh, parentSpanInst);
      //appendnew_next_sd_KysKK5byFR9gRTnG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KysKK5byFR9gRTnG',
        spanInst,
        'sd_KysKK5byFR9gRTnG'
      );
    }
  }

  async sd_6dFRuRUZnbvrAzIr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6dFRuRUZnbvrAzIr',
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
        bh = await this.sd_lUCklfiDkKnh6sHS(bh, parentSpanInst);
      } else {
        bh = await this.sd_C9Ra6jPcrRaFvoHb(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6dFRuRUZnbvrAzIr',
        spanInst,
        'sd_6dFRuRUZnbvrAzIr'
      );
    }
  }

  async sd_lUCklfiDkKnh6sHS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lUCklfiDkKnh6sHS',
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
      bh = await this.sd_ooMOBsgnm4QColvK(bh, parentSpanInst);
      //appendnew_next_sd_lUCklfiDkKnh6sHS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lUCklfiDkKnh6sHS',
        spanInst,
        'sd_lUCklfiDkKnh6sHS'
      );
    }
  }

  async sd_ooMOBsgnm4QColvK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ooMOBsgnm4QColvK',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_hq5S46ciO2lIqGyG(bh, parentSpanInst);
      //appendnew_next_sd_ooMOBsgnm4QColvK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ooMOBsgnm4QColvK',
        spanInst,
        'sd_ooMOBsgnm4QColvK'
      );
    }
  }

  async sd_hq5S46ciO2lIqGyG(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hq5S46ciO2lIqGyG');
    }
  }

  async sd_C9Ra6jPcrRaFvoHb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_C9Ra6jPcrRaFvoHb',
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
        bh = await this.sd_ELFqZkonnyTmgb2m(bh, parentSpanInst);
      } else {
        bh = await this.sd_dCStbqOhEHuJhVT0(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C9Ra6jPcrRaFvoHb',
        spanInst,
        'sd_C9Ra6jPcrRaFvoHb'
      );
    }
  }

  async sd_ELFqZkonnyTmgb2m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ELFqZkonnyTmgb2m',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ThBdACddeGdujaUh(bh, parentSpanInst);
      //appendnew_next_sd_ELFqZkonnyTmgb2m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ELFqZkonnyTmgb2m',
        spanInst,
        'sd_ELFqZkonnyTmgb2m'
      );
    }
  }

  async sd_ThBdACddeGdujaUh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ThBdACddeGdujaUh',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dCStbqOhEHuJhVT0(bh, parentSpanInst);
      //appendnew_next_sd_ThBdACddeGdujaUh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ThBdACddeGdujaUh',
        spanInst,
        'sd_ThBdACddeGdujaUh'
      );
    }
  }

  async sd_dCStbqOhEHuJhVT0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCStbqOhEHuJhVT0',
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
        'sd_dCStbqOhEHuJhVT0',
        spanInst,
        'sd_dCStbqOhEHuJhVT0'
      );
    }
  }

  async sd_SNPY0hiObQAz2Q8N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SNPY0hiObQAz2Q8N',
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
        bh = await this.sd_4em43dK11B5Zch3b(bh, parentSpanInst);
      } else {
        bh = await this.sd_DXdr8eKpSR37VhFP(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SNPY0hiObQAz2Q8N',
        spanInst,
        'sd_SNPY0hiObQAz2Q8N'
      );
    }
  }

  async sd_4em43dK11B5Zch3b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4em43dK11B5Zch3b',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_hq5S46ciO2lIqGyG(bh, parentSpanInst);
      //appendnew_next_sd_4em43dK11B5Zch3b
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4em43dK11B5Zch3b',
        spanInst,
        'sd_4em43dK11B5Zch3b'
      );
    }
  }

  async sd_DXdr8eKpSR37VhFP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DXdr8eKpSR37VhFP',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_hq5S46ciO2lIqGyG(bh, parentSpanInst);
      //appendnew_next_sd_DXdr8eKpSR37VhFP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DXdr8eKpSR37VhFP',
        spanInst,
        'sd_DXdr8eKpSR37VhFP'
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
      (await this.sd_6KgnrMIAiRWoZehv(bh, parentSpanInst)) ||
      (await this.sd_e3u4ONUzAwrziI6b(bh, parentSpanInst))
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
  async sd_6KgnrMIAiRWoZehv(bh, parentSpanInst) {
    const nodes = [
      'sd_4oDsCfQoL2sFpzot',
      'sd_5MB8DCxXB2rkW2zd',
      'sd_NgkGlt2QQrarzkwx',
      'sd_w6rFhGHDIxaBPIJC',
      'sd_iRF17VsDbTfCEgpc',
      'sd_VrVYUASyy9ycabxI',
      'sd_9z5wN20UZzsqH4lY',
      'sd_u42J18J6vqbLxOe8',
      'sd_FcQRplvNi9WkQhr6',
      'sd_Qa2Vq3HW7Up7kva2',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_8wLFLu1kLZixFfbj(bh, parentSpanInst);
      //appendnew_next_sd_6KgnrMIAiRWoZehv
      return true;
    }
    return false;
  }
  async sd_e3u4ONUzAwrziI6b(bh, parentSpanInst) {
    const nodes = ['sd_KysKK5byFR9gRTnG'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_ooMOBsgnm4QColvK(bh, parentSpanInst);
      //appendnew_next_sd_e3u4ONUzAwrziI6b
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}

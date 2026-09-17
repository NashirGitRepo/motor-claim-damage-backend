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
import * as sd_agvmSMuwd43g3SOl from './idsutil'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class ids_1 {
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
    this.serviceName = 'ids_1';
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
      instance = new ids_1(
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
    //appendnew_flow_ids_1_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids_1');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_59rLmszaDEZtE1Yr(bh, parentSpanInst);
          //appendnew_next_sd_ULG8Xnnhs9PL1hax
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ULG8Xnnhs9PL1hax');
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
          bh = await this.sd_1IlZmRx7KplG5Tde(bh, parentSpanInst);
          //appendnew_next_sd_f6ztCsnA7apcQSGV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_f6ztCsnA7apcQSGV');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_1_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids_1');

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
          bh = await this.sd_5Z73t4YrbRvnhSFp(bh, parentSpanInst);
          //appendnew_next_sd_CABFlJVeaoNAimB7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CABFlJVeaoNAimB7');
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
          bh = await this.sd_H0pYwgIncN1R6oBR(bh, parentSpanInst);
          //appendnew_next_sd_LLftS6I3v9bfSYhg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_LLftS6I3v9bfSYhg');
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
          bh = await this.sd_1CITQCHjbjWMdnQT(bh, parentSpanInst);
          //appendnew_next_sd_jWRqIhg8WlAIZXGg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jWRqIhg8WlAIZXGg');
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
          bh = await this.sd_XFupu9T0BGsRImJ3(bh, parentSpanInst);
          //appendnew_next_sd_a3lpwGUcikK3evZN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_a3lpwGUcikK3evZN');
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
          bh = await this.sd_XzVdJ5iziZEJLfr3(bh, parentSpanInst);
          //appendnew_next_sd_cgdbKUKFihFjmKRu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cgdbKUKFihFjmKRu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_1_HttpIn
  }
  //   service flows_ids_1

  //appendnew_flow_ids_1_start

  async sd_5Z73t4YrbRvnhSFp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5Z73t4YrbRvnhSFp',
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
      bh = await this.sd_hOvD1csIyOeIn8Mr(bh, parentSpanInst);
      //appendnew_next_sd_5Z73t4YrbRvnhSFp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5Z73t4YrbRvnhSFp',
        spanInst,
        'sd_5Z73t4YrbRvnhSFp'
      );
    }
  }

  async sd_hOvD1csIyOeIn8Mr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hOvD1csIyOeIn8Mr',
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
        bh = await this.sd_wTKiwpIOsiQ1SmXi(bh, parentSpanInst);
      } else {
        bh = await this.sd_yEqyKtuKrCt1ZTQ3(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hOvD1csIyOeIn8Mr',
        spanInst,
        'sd_hOvD1csIyOeIn8Mr'
      );
    }
  }

  async sd_wTKiwpIOsiQ1SmXi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wTKiwpIOsiQ1SmXi',
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
      bh = await this.sd_Ey6mmE0qagTBt9sC(bh, parentSpanInst);
      //appendnew_next_sd_wTKiwpIOsiQ1SmXi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wTKiwpIOsiQ1SmXi',
        spanInst,
        'sd_wTKiwpIOsiQ1SmXi'
      );
    }
  }

  async sd_Ey6mmE0qagTBt9sC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ey6mmE0qagTBt9sC',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZLH08hZzu7HfGCxq(bh, parentSpanInst);
      //appendnew_next_sd_Ey6mmE0qagTBt9sC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ey6mmE0qagTBt9sC',
        spanInst,
        'sd_Ey6mmE0qagTBt9sC'
      );
    }
  }

  async sd_ZLH08hZzu7HfGCxq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZLH08hZzu7HfGCxq',
      parentSpanInst
    );
    try {
      const sd_agvmSMuwd43g3SOlInstance: sd_agvmSMuwd43g3SOl.idsutil_1 =
        sd_agvmSMuwd43g3SOl.idsutil_1.getInstance();
      let outputVariables =
        await sd_agvmSMuwd43g3SOlInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CLvawXPw8vgEO6he(bh, parentSpanInst);
      //appendnew_next_sd_ZLH08hZzu7HfGCxq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZLH08hZzu7HfGCxq',
        spanInst,
        'sd_ZLH08hZzu7HfGCxq'
      );
    }
  }

  async sd_CLvawXPw8vgEO6he(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CLvawXPw8vgEO6he',
      parentSpanInst
    );
    try {
      const sd_agvmSMuwd43g3SOlInstance: sd_agvmSMuwd43g3SOl.idsutil_1 =
        sd_agvmSMuwd43g3SOl.idsutil_1.getInstance();
      let outputVariables =
        await sd_agvmSMuwd43g3SOlInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fHb9c9joYpNxCL2V(bh, parentSpanInst);
      //appendnew_next_sd_CLvawXPw8vgEO6he
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CLvawXPw8vgEO6he',
        spanInst,
        'sd_CLvawXPw8vgEO6he'
      );
    }
  }

  async sd_fHb9c9joYpNxCL2V(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fHb9c9joYpNxCL2V',
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
      await this.sd_1OEw0WJfXzAyRJ8f(bh, parentSpanInst);
      //appendnew_next_sd_fHb9c9joYpNxCL2V
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fHb9c9joYpNxCL2V',
        spanInst,
        'sd_fHb9c9joYpNxCL2V'
      );
    }
  }

  async sd_1OEw0WJfXzAyRJ8f(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1OEw0WJfXzAyRJ8f');
    }
  }

  async sd_yEqyKtuKrCt1ZTQ3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yEqyKtuKrCt1ZTQ3',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ihkq6yE9DN1fHcWj(bh, parentSpanInst);
      //appendnew_next_sd_yEqyKtuKrCt1ZTQ3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yEqyKtuKrCt1ZTQ3',
        spanInst,
        'sd_yEqyKtuKrCt1ZTQ3'
      );
    }
  }

  async sd_ihkq6yE9DN1fHcWj(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ihkq6yE9DN1fHcWj');
    }
  }

  async sd_59rLmszaDEZtE1Yr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_59rLmszaDEZtE1Yr',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sHM3B4lzzjwgfvwo(bh, parentSpanInst);
      //appendnew_next_sd_59rLmszaDEZtE1Yr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_59rLmszaDEZtE1Yr',
        spanInst,
        'sd_59rLmszaDEZtE1Yr'
      );
    }
  }

  async sd_sHM3B4lzzjwgfvwo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sHM3B4lzzjwgfvwo',
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
        'sd_sHM3B4lzzjwgfvwo',
        spanInst,
        'sd_sHM3B4lzzjwgfvwo'
      );
    }
  }

  async sd_H0pYwgIncN1R6oBR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H0pYwgIncN1R6oBR',
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
      bh = await this.sd_ojZilCWyyHlOtBOe(bh, parentSpanInst);
      //appendnew_next_sd_H0pYwgIncN1R6oBR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H0pYwgIncN1R6oBR',
        spanInst,
        'sd_H0pYwgIncN1R6oBR'
      );
    }
  }

  async sd_ojZilCWyyHlOtBOe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ojZilCWyyHlOtBOe',
      parentSpanInst
    );
    try {
      const sd_agvmSMuwd43g3SOlInstance: sd_agvmSMuwd43g3SOl.idsutil_1 =
        sd_agvmSMuwd43g3SOl.idsutil_1.getInstance();
      let outputVariables =
        await sd_agvmSMuwd43g3SOlInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_z1nraXTtSxuUjYiX(bh, parentSpanInst);
      //appendnew_next_sd_ojZilCWyyHlOtBOe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ojZilCWyyHlOtBOe',
        spanInst,
        'sd_ojZilCWyyHlOtBOe'
      );
    }
  }

  async sd_z1nraXTtSxuUjYiX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_z1nraXTtSxuUjYiX',
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
      bh = await this.sd_epOsahGqZKm5XZfn(bh, parentSpanInst);
      //appendnew_next_sd_z1nraXTtSxuUjYiX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z1nraXTtSxuUjYiX',
        spanInst,
        'sd_z1nraXTtSxuUjYiX'
      );
    }
  }

  async sd_epOsahGqZKm5XZfn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_epOsahGqZKm5XZfn',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0PSVuWwmLbin2pkc(bh, parentSpanInst);
      //appendnew_next_sd_epOsahGqZKm5XZfn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_epOsahGqZKm5XZfn',
        spanInst,
        'sd_epOsahGqZKm5XZfn'
      );
    }
  }

  async sd_0PSVuWwmLbin2pkc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0PSVuWwmLbin2pkc',
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
        bh = await this.sd_IQ6oAG4JPGNXYHBT(bh, parentSpanInst);
      } else {
        bh = await this.sd_X2LILVddktJF4wBa(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0PSVuWwmLbin2pkc',
        spanInst,
        'sd_0PSVuWwmLbin2pkc'
      );
    }
  }

  async sd_IQ6oAG4JPGNXYHBT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IQ6oAG4JPGNXYHBT',
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
      await this.sd_cJoy9yBsGcD2k98o(bh, parentSpanInst);
      //appendnew_next_sd_IQ6oAG4JPGNXYHBT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IQ6oAG4JPGNXYHBT',
        spanInst,
        'sd_IQ6oAG4JPGNXYHBT'
      );
    }
  }

  async sd_cJoy9yBsGcD2k98o(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cJoy9yBsGcD2k98o');
    }
  }

  async sd_X2LILVddktJF4wBa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X2LILVddktJF4wBa',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_hfWAlUGQkdymHYnP(bh, parentSpanInst);
      //appendnew_next_sd_X2LILVddktJF4wBa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X2LILVddktJF4wBa',
        spanInst,
        'sd_X2LILVddktJF4wBa'
      );
    }
  }

  async sd_hfWAlUGQkdymHYnP(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hfWAlUGQkdymHYnP');
    }
  }

  async sd_1CITQCHjbjWMdnQT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1CITQCHjbjWMdnQT',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_NOIUVjxXuAxlVXeW(bh, parentSpanInst);
      //appendnew_next_sd_1CITQCHjbjWMdnQT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1CITQCHjbjWMdnQT',
        spanInst,
        'sd_1CITQCHjbjWMdnQT'
      );
    }
  }

  async sd_NOIUVjxXuAxlVXeW(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NOIUVjxXuAxlVXeW');
    }
  }

  async sd_i5ptNelWgRv1d9e1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i5ptNelWgRv1d9e1',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_i5ptNelWgRv1d9e1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i5ptNelWgRv1d9e1',
        spanInst,
        'sd_i5ptNelWgRv1d9e1'
      );
    }
  }

  async sd_XFupu9T0BGsRImJ3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XFupu9T0BGsRImJ3',
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
      bh = await this.sd_6KyCj9QQYRoiAUuO(bh, parentSpanInst);
      //appendnew_next_sd_XFupu9T0BGsRImJ3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XFupu9T0BGsRImJ3',
        spanInst,
        'sd_XFupu9T0BGsRImJ3'
      );
    }
  }

  async sd_6KyCj9QQYRoiAUuO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6KyCj9QQYRoiAUuO',
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
      bh = await this.sd_TYhpeGzSgv474sq2(bh, parentSpanInst);
      //appendnew_next_sd_6KyCj9QQYRoiAUuO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6KyCj9QQYRoiAUuO',
        spanInst,
        'sd_6KyCj9QQYRoiAUuO'
      );
    }
  }

  async sd_TYhpeGzSgv474sq2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TYhpeGzSgv474sq2',
      parentSpanInst
    );
    try {
      const sd_agvmSMuwd43g3SOlInstance: sd_agvmSMuwd43g3SOl.idsutil_1 =
        sd_agvmSMuwd43g3SOl.idsutil_1.getInstance();
      let outputVariables =
        await sd_agvmSMuwd43g3SOlInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_l5HOBzpkhKlgraqp(bh, parentSpanInst);
      //appendnew_next_sd_TYhpeGzSgv474sq2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TYhpeGzSgv474sq2',
        spanInst,
        'sd_TYhpeGzSgv474sq2'
      );
    }
  }

  async sd_l5HOBzpkhKlgraqp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l5HOBzpkhKlgraqp',
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
        bh = await this.sd_Vw24fPzarqZvOdJA(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_aBDy98G5aShQU4kC(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l5HOBzpkhKlgraqp',
        spanInst,
        'sd_l5HOBzpkhKlgraqp'
      );
    }
  }

  async sd_Vw24fPzarqZvOdJA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vw24fPzarqZvOdJA',
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
      //appendnew_next_sd_Vw24fPzarqZvOdJA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vw24fPzarqZvOdJA',
        spanInst,
        'sd_Vw24fPzarqZvOdJA'
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
      await this.sd_nrHN8ZaPaR1q7Yfh(bh, parentSpanInst);
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

  async sd_nrHN8ZaPaR1q7Yfh(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nrHN8ZaPaR1q7Yfh');
    }
  }

  async sd_aBDy98G5aShQU4kC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aBDy98G5aShQU4kC',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_nrHN8ZaPaR1q7Yfh(bh, parentSpanInst);
      //appendnew_next_sd_aBDy98G5aShQU4kC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aBDy98G5aShQU4kC',
        spanInst,
        'sd_aBDy98G5aShQU4kC'
      );
    }
  }

  async sd_XzVdJ5iziZEJLfr3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XzVdJ5iziZEJLfr3',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XBmMR4QbzyJaRcu7(bh, parentSpanInst);
      //appendnew_next_sd_XzVdJ5iziZEJLfr3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XzVdJ5iziZEJLfr3',
        spanInst,
        'sd_XzVdJ5iziZEJLfr3'
      );
    }
  }

  async sd_XBmMR4QbzyJaRcu7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XBmMR4QbzyJaRcu7',
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
        bh = await this.sd_rxIwUDAxgnH1T2s7(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dD3vjOs0cUvU9A2F(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XBmMR4QbzyJaRcu7',
        spanInst,
        'sd_XBmMR4QbzyJaRcu7'
      );
    }
  }

  async sd_rxIwUDAxgnH1T2s7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rxIwUDAxgnH1T2s7',
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
      await this.sd_uxUV3sbJ0JElvJTQ(bh, parentSpanInst);
      //appendnew_next_sd_rxIwUDAxgnH1T2s7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rxIwUDAxgnH1T2s7',
        spanInst,
        'sd_rxIwUDAxgnH1T2s7'
      );
    }
  }

  async sd_uxUV3sbJ0JElvJTQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uxUV3sbJ0JElvJTQ');
    }
  }

  async sd_dD3vjOs0cUvU9A2F(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dD3vjOs0cUvU9A2F',
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
      bh = await this.sd_ghB4FvwraqiBd0rg(bh, parentSpanInst);
      //appendnew_next_sd_dD3vjOs0cUvU9A2F
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dD3vjOs0cUvU9A2F',
        spanInst,
        'sd_dD3vjOs0cUvU9A2F'
      );
    }
  }

  async sd_ghB4FvwraqiBd0rg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ghB4FvwraqiBd0rg',
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
      bh = await this.sd_Sz7VnXPSkoh03gsq(bh, parentSpanInst);
      //appendnew_next_sd_ghB4FvwraqiBd0rg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ghB4FvwraqiBd0rg',
        spanInst,
        'sd_ghB4FvwraqiBd0rg'
      );
    }
  }

  async sd_Sz7VnXPSkoh03gsq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Sz7VnXPSkoh03gsq',
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
        bh = await this.sd_bOYif6T80pH22KWD(bh, parentSpanInst);
      } else {
        bh = await this.sd_kROHF4xWpGcBAzVf(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Sz7VnXPSkoh03gsq',
        spanInst,
        'sd_Sz7VnXPSkoh03gsq'
      );
    }
  }

  async sd_bOYif6T80pH22KWD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bOYif6T80pH22KWD',
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
      await this.sd_YVhKcdqMJLkC5Kcd(bh, parentSpanInst);
      //appendnew_next_sd_bOYif6T80pH22KWD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bOYif6T80pH22KWD',
        spanInst,
        'sd_bOYif6T80pH22KWD'
      );
    }
  }

  async sd_YVhKcdqMJLkC5Kcd(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YVhKcdqMJLkC5Kcd');
    }
  }

  async sd_kROHF4xWpGcBAzVf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kROHF4xWpGcBAzVf',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_3AMj6cjP1fXnqhvz(bh, parentSpanInst);
      //appendnew_next_sd_kROHF4xWpGcBAzVf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kROHF4xWpGcBAzVf',
        spanInst,
        'sd_kROHF4xWpGcBAzVf'
      );
    }
  }

  async sd_3AMj6cjP1fXnqhvz(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3AMj6cjP1fXnqhvz');
    }
  }

  async sd_1IlZmRx7KplG5Tde(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1IlZmRx7KplG5Tde',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rV3i94ZzT9q21ExH(bh, parentSpanInst);
      //appendnew_next_sd_1IlZmRx7KplG5Tde
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1IlZmRx7KplG5Tde',
        spanInst,
        'sd_1IlZmRx7KplG5Tde'
      );
    }
  }

  async sd_rV3i94ZzT9q21ExH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rV3i94ZzT9q21ExH',
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
      bh = await this.sd_nI7GOfCoaLuwGLEN(bh, parentSpanInst);
      //appendnew_next_sd_rV3i94ZzT9q21ExH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rV3i94ZzT9q21ExH',
        spanInst,
        'sd_rV3i94ZzT9q21ExH'
      );
    }
  }

  async sd_nI7GOfCoaLuwGLEN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nI7GOfCoaLuwGLEN',
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
      bh = await this.sd_k9V2ZKfDIosATFuk(bh, parentSpanInst);
      //appendnew_next_sd_nI7GOfCoaLuwGLEN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nI7GOfCoaLuwGLEN',
        spanInst,
        'sd_nI7GOfCoaLuwGLEN'
      );
    }
  }

  async sd_k9V2ZKfDIosATFuk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k9V2ZKfDIosATFuk',
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
        bh = await this.sd_vq2UMIjyJGMdWjIX(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_nNjrnwcdY1RgyHyI(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k9V2ZKfDIosATFuk',
        spanInst,
        'sd_k9V2ZKfDIosATFuk'
      );
    }
  }

  async sd_vq2UMIjyJGMdWjIX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vq2UMIjyJGMdWjIX',
      parentSpanInst
    );
    try {
      const sd_agvmSMuwd43g3SOlInstance: sd_agvmSMuwd43g3SOl.idsutil_1 =
        sd_agvmSMuwd43g3SOl.idsutil_1.getInstance();
      let outputVariables = await sd_agvmSMuwd43g3SOlInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_p8zWTlp77tvceAAF(bh, parentSpanInst);
      //appendnew_next_sd_vq2UMIjyJGMdWjIX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vq2UMIjyJGMdWjIX',
        spanInst,
        'sd_vq2UMIjyJGMdWjIX'
      );
    }
  }

  async sd_p8zWTlp77tvceAAF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_p8zWTlp77tvceAAF',
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
        bh = await this.sd_eQ4jdsgYtzi4PoEd(bh, parentSpanInst);
      } else {
        bh = await this.sd_A4TSCnjAPgJg5KNw(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p8zWTlp77tvceAAF',
        spanInst,
        'sd_p8zWTlp77tvceAAF'
      );
    }
  }

  async sd_eQ4jdsgYtzi4PoEd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eQ4jdsgYtzi4PoEd',
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
      bh = await this.sd_ROtCD4693Tc6Zs4y(bh, parentSpanInst);
      //appendnew_next_sd_eQ4jdsgYtzi4PoEd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eQ4jdsgYtzi4PoEd',
        spanInst,
        'sd_eQ4jdsgYtzi4PoEd'
      );
    }
  }

  async sd_ROtCD4693Tc6Zs4y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ROtCD4693Tc6Zs4y',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EJwk3M0Sgbf9WViT(bh, parentSpanInst);
      //appendnew_next_sd_ROtCD4693Tc6Zs4y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ROtCD4693Tc6Zs4y',
        spanInst,
        'sd_ROtCD4693Tc6Zs4y'
      );
    }
  }

  async sd_EJwk3M0Sgbf9WViT(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EJwk3M0Sgbf9WViT');
    }
  }

  async sd_A4TSCnjAPgJg5KNw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A4TSCnjAPgJg5KNw',
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
        bh = await this.sd_7zPp3QjCWZxSuRf1(bh, parentSpanInst);
      } else {
        bh = await this.sd_GzpSTuxW6WhhsNfJ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A4TSCnjAPgJg5KNw',
        spanInst,
        'sd_A4TSCnjAPgJg5KNw'
      );
    }
  }

  async sd_7zPp3QjCWZxSuRf1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7zPp3QjCWZxSuRf1',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_470l2MG1kDGBo6md(bh, parentSpanInst);
      //appendnew_next_sd_7zPp3QjCWZxSuRf1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7zPp3QjCWZxSuRf1',
        spanInst,
        'sd_7zPp3QjCWZxSuRf1'
      );
    }
  }

  async sd_470l2MG1kDGBo6md(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_470l2MG1kDGBo6md',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GzpSTuxW6WhhsNfJ(bh, parentSpanInst);
      //appendnew_next_sd_470l2MG1kDGBo6md
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_470l2MG1kDGBo6md',
        spanInst,
        'sd_470l2MG1kDGBo6md'
      );
    }
  }

  async sd_GzpSTuxW6WhhsNfJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GzpSTuxW6WhhsNfJ',
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
        'sd_GzpSTuxW6WhhsNfJ',
        spanInst,
        'sd_GzpSTuxW6WhhsNfJ'
      );
    }
  }

  async sd_nNjrnwcdY1RgyHyI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nNjrnwcdY1RgyHyI',
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
        bh = await this.sd_PoUsJiQB6xSDC6TD(bh, parentSpanInst);
      } else {
        bh = await this.sd_BflKzkgf7J2edCBD(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nNjrnwcdY1RgyHyI',
        spanInst,
        'sd_nNjrnwcdY1RgyHyI'
      );
    }
  }

  async sd_PoUsJiQB6xSDC6TD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PoUsJiQB6xSDC6TD',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EJwk3M0Sgbf9WViT(bh, parentSpanInst);
      //appendnew_next_sd_PoUsJiQB6xSDC6TD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PoUsJiQB6xSDC6TD',
        spanInst,
        'sd_PoUsJiQB6xSDC6TD'
      );
    }
  }

  async sd_BflKzkgf7J2edCBD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BflKzkgf7J2edCBD',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EJwk3M0Sgbf9WViT(bh, parentSpanInst);
      //appendnew_next_sd_BflKzkgf7J2edCBD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BflKzkgf7J2edCBD',
        spanInst,
        'sd_BflKzkgf7J2edCBD'
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
      (await this.sd_dlLuf1bMmAGZAmAz(bh, parentSpanInst)) ||
      (await this.sd_L1nXKVKdby9rsSn4(bh, parentSpanInst))
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
  async sd_dlLuf1bMmAGZAmAz(bh, parentSpanInst) {
    const nodes = [
      'sd_CLvawXPw8vgEO6he',
      'sd_LLftS6I3v9bfSYhg',
      'sd_ojZilCWyyHlOtBOe',
      'sd_z1nraXTtSxuUjYiX',
      'sd_H0pYwgIncN1R6oBR',
      'sd_0PSVuWwmLbin2pkc',
      'sd_IQ6oAG4JPGNXYHBT',
      'sd_X2LILVddktJF4wBa',
      'sd_cJoy9yBsGcD2k98o',
      'sd_hfWAlUGQkdymHYnP',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_i5ptNelWgRv1d9e1(bh, parentSpanInst);
      //appendnew_next_sd_dlLuf1bMmAGZAmAz
      return true;
    }
    return false;
  }
  async sd_L1nXKVKdby9rsSn4(bh, parentSpanInst) {
    const nodes = ['sd_vq2UMIjyJGMdWjIX'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_ROtCD4693Tc6Zs4y(bh, parentSpanInst);
      //appendnew_next_sd_L1nXKVKdby9rsSn4
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_1_Catch
}

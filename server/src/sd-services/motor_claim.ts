// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class motor_claim {
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
    this.serviceName = 'motor_claim';
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
      instance = new motor_claim(
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
    //appendnew_flow_motor_claim_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: motor_claim');
    //appendnew_flow_motor_claim_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: motor_claim');

    this.app['get'](
      `${this.serviceBasePath}/claim`,
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
          bh = await this.sd_ThXGcgcavQjqQq36(bh, parentSpanInst);
          //appendnew_next_sd_KSPIjGRQyiVfJsJL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KSPIjGRQyiVfJsJL');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/policy/:policyNo`,
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
          bh = await this.getPolicyByPolicyId(bh, parentSpanInst);
          //appendnew_next_sd_rKjGOOyDJFMlpDH1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rKjGOOyDJFMlpDH1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/claim`,
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
          bh = await this.fetchStartAndEnd(bh, parentSpanInst);
          //appendnew_next_sd_N5rJcLl8WmHMYH5T
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_N5rJcLl8WmHMYH5T');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/claim/:claimId`,
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
          bh = await this.scriptForGetClaim(bh, parentSpanInst);
          //appendnew_next_sd_Jv8qSpRJH2rQUQMz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Jv8qSpRJH2rQUQMz');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/claim/:claimId/surveyor-action`,
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
          bh = await this.scriptForSurveyerAction(bh, parentSpanInst);
          //appendnew_next_sd_EboTZwar9HCbM3nJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EboTZwar9HCbM3nJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/claim/:claimId/manager-action`,
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
          bh = await this.scriptForManagerAction(bh, parentSpanInst);
          //appendnew_next_sd_Dt8fziUZLsierLTp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Dt8fziUZLsierLTp');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/findDate/:policyNo`,
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
          bh = await this.sd_zZwEFGpJeOHK4zUy(bh, parentSpanInst);
          //appendnew_next_sd_S8Oiec5Tj7DlbsqQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_S8Oiec5Tj7DlbsqQ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/autosettle/:claimId`,
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
          bh = await this.prepareCasePayload(bh, parentSpanInst);
          //appendnew_next_sd_r9ojCBxBZ43Nf5ju
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_r9ojCBxBZ43Nf5ju');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/status/:policyNo`,
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
          bh = await this.sd_r83hE1V7HNcX5MHd(bh, parentSpanInst);
          //appendnew_next_sd_ZqD2kwXu0AjWuuLa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ZqD2kwXu0AjWuuLa');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/findNetPayable/:claimId`,
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
          bh = await this.findNetPayable(bh, parentSpanInst);
          //appendnew_next_sd_MJ5QqpEUs1ASueT3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_MJ5QqpEUs1ASueT3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/netPayable/:claimId`,
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
          bh = await this.sd_B1fByphVxFOWFwyn(bh, parentSpanInst);
          //appendnew_next_sd_aKqskmmRFHq2XJ4d
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aKqskmmRFHq2XJ4d');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_motor_claim_HttpIn
  }
  //   service flows_motor_claim

  //appendnew_flow_motor_claim_start

  async sd_ThXGcgcavQjqQq36(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ThXGcgcavQjqQq36',
      parentSpanInst
    );
    try {
      console.log('inside script node');
      bh.local.query = 'select * from motor_claims.policies';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_15W5jWEUylV6lHiA(bh, parentSpanInst);
      //appendnew_next_sd_ThXGcgcavQjqQq36
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ThXGcgcavQjqQq36',
        spanInst,
        'sd_ThXGcgcavQjqQq36'
      );
    }
  }

  async sd_15W5jWEUylV6lHiA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_15W5jWEUylV6lHiA',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_aK4cTo0GZ46FvEL3(bh, parentSpanInst);
      //appendnew_next_sd_15W5jWEUylV6lHiA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_15W5jWEUylV6lHiA',
        spanInst,
        'sd_15W5jWEUylV6lHiA'
      );
    }
  }

  async sd_aK4cTo0GZ46FvEL3(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aK4cTo0GZ46FvEL3');
    }
  }

  async getPolicyByPolicyId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPolicyByPolicyId',
      parentSpanInst
    );
    try {
      //bh.local.query="select * from motor_claims.policies where policy_no="+bh.input.params.policyNo;
      bh.local.query = `SELECT * FROM motor_claims.policies WHERE policy_no = '${bh.input.params.policyNo}'`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.executeSqlQuery(bh, parentSpanInst);
      //appendnew_next_getPolicyByPolicyId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Co7m3tBEgoaEaTO7',
        spanInst,
        'getPolicyByPolicyId'
      );
    }
  }

  async executeSqlQuery(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'executeSqlQuery',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.errorHandleForPolicyNo(bh, parentSpanInst);
      //appendnew_next_executeSqlQuery
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4D6Q0R1fXx1ExVO1',
        spanInst,
        'executeSqlQuery'
      );
    }
  }

  async errorHandleForPolicyNo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'errorHandleForPolicyNo',
      parentSpanInst
    );
    try {
      var notexists = bh.local.result.length == 0;

      if (notexists) {
        bh.local.statusCode = 404;

        let msg = 'Policy Not Found';

        bh.local.responseBody = {
          error: msg,
        };

        throw new Error(msg);
      }

      // Policy exists
      var policy = bh.local.result[0];

      // Check policy status
      if (String(policy.status).toUpperCase() !== 'ACTIVE') {
        bh.local.statusCode = 404;

        let msg = 'Policy is not ACTIVE';

        bh.local.responseBody = {
          error: msg,
        };

        throw new Error(msg);
      }

      // Policy found and ACTIVE
      bh.local.statusCode = 200;

      bh.local.responseBody = policy;
      this.tracerService.sendData(spanInst, bh);
      await this.getPolicyDetails(bh, parentSpanInst);
      //appendnew_next_errorHandleForPolicyNo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4neUItJPUSEOE6QR',
        spanInst,
        'errorHandleForPolicyNo'
      );
    }
  }

  async getPolicyDetails(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qSYpcmsrX5ojENYQ');
    }
  }

  async fetchStartAndEnd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fetchStartAndEnd',
      parentSpanInst
    );
    try {
      bh.local.fetchQuery = `
SELECT
    policy_start_date,
    policy_end_date
FROM motor_claims.policies
WHERE policy_no = '${bh.input.body.policy_no}';
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RgMpwxx0sYuVDl8D(bh, parentSpanInst);
      //appendnew_next_fetchStartAndEnd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WgcNzgucwQOkmOJ7',
        spanInst,
        'fetchStartAndEnd'
      );
    }
  }

  async sd_RgMpwxx0sYuVDl8D(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RgMpwxx0sYuVDl8D',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.fetchResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.fetchQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.scriptForClaim(bh, parentSpanInst);
      //appendnew_next_sd_RgMpwxx0sYuVDl8D
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RgMpwxx0sYuVDl8D',
        spanInst,
        'sd_RgMpwxx0sYuVDl8D'
      );
    }
  }

  async scriptForClaim(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'scriptForClaim',
      parentSpanInst
    );
    try {
      // const now = new Date();

      // const date =
      //     now.getFullYear().toString() +
      //     String(now.getMonth() + 1).padStart(2, '0') +
      //     String(now.getDate()).padStart(2, '0');

      // const random = Math.floor(Math.random() * 99999)
      //     .toString()
      //     .padStart(5, '0');

      //bh.local.claimId = `CLM-${date}-${random}`;
      console.log('input paramatere', bh.input.body);
      bh.local.params = {
        claim_id: bh.input.body.claim_id, // Generate CLM-YYYYMMDD-NNNNN
        policy_no: bh.input.body.policy_no,
        date_of_loss: bh.input.body.date_of_loss,
        loss_code: bh.input.body.loss_code,
        part_group_code: bh.input.body.part_group_code,
        estimated_parts_cost: bh.input.body.estimated_parts_cost,
        garage_type: bh.input.body.garage_type,
        fir_filed: bh.input.body.fir_filed,
        valid_licence: bh.input.body.valid_licence,
        loss_description: bh.input.body.loss_description,
      };
      // bh.local.query =
      // "INSERT INTO motor_claims.claims (" +
      // "claim_id, " +
      // "policy_no, " +
      // "date_of_loss, " +
      // "intimated_at, " +
      // "loss_code, " +
      // "part_group_code, " +
      // "estimated_parts_cost, " +
      // "garage_type, " +
      // "fir_filed, " +
      // "valid_licence, " +
      // "loss_description, " +
      // "depreciated_parts, " +
      // "labour_cost, " +
      // "gross_assessed, " +
      // "system_net_payable, " +
      // "surveyor_net_payable, " +
      // "deduction_trace, " +
      // "surveyor_remarks, " +
      // "manager_remarks, " +
      // "settlement_ref, " +
      // "status, " +
      // "created_at, " +
      // "updated_at" +
      // ") VALUES (" +
      // "'" + bh.local.claimId + "', " +
      // "'" + bh.input.body.policy_no + "', " +
      // "'" + bh.input.body.date_of_loss + "', " +
      // "NOW(), " +
      // "'" + bh.input.body.loss_code + "', " +
      // "'" + bh.input.body.part_group_code + "', " +
      // bh.input.body.estimated_parts_cost + ", " +
      // "'" + bh.input.body.garage_type + "', " +
      // bh.input.body.fir_filed + ", " +
      // bh.input.body.valid_licence + ", " +
      // "'" + bh.input.body.loss_description + "', " +
      // "NULL, " +
      // "NULL, " +
      // "NULL, " +
      // "NULL, " +
      // "NULL, " +
      // "NULL, " +
      // "NULL, " +
      // "NULL, " +
      // "NULL, " +
      // "'REGISTERED', " +
      // "NOW(), " +
      // "NOW()" +
      // ");";

      console.log('=====================>');
      var lossDate = new Date(bh.input.body.date_of_loss);
      var startDate = new Date(bh.local.fetchResult[0].policy_start_date);
      var endDate = new Date(bh.local.fetchResult[0].policy_end_date);
      bh.local.flag = 0;
      // Check Date of Loss is within Policy Period
      if (lossDate >= startDate && lossDate <= endDate) {
        // ===== INSERT QUERY =====
        bh.local.flag = 1;
        bh.local.query =
          'INSERT INTO motor_claims.claims (' +
          'claim_id, ' +
          'policy_no, ' +
          'date_of_loss, ' +
          'intimated_at, ' +
          'loss_code, ' +
          'part_group_code, ' +
          'estimated_parts_cost, ' +
          'garage_type, ' +
          'fir_filed, ' +
          'valid_licence, ' +
          'loss_description, ' +
          'depreciated_parts, ' +
          'labour_cost, ' +
          'gross_assessed, ' +
          'system_net_payable, ' +
          'surveyor_net_payable, ' +
          'deduction_trace, ' +
          'surveyor_remarks, ' +
          'manager_remarks, ' +
          'settlement_ref, ' +
          'status, ' +
          'created_at, ' +
          'updated_at' +
          ') VALUES (' +
          "'" +
          bh.input.body.claim_id +
          "', " +
          "'" +
          bh.input.body.policy_no +
          "', " +
          "'" +
          bh.input.body.date_of_loss +
          "', " +
          'NOW(), ' +
          "'" +
          bh.input.body.loss_code +
          "', " +
          "'" +
          bh.input.body.part_group_code +
          "', " +
          bh.input.body.estimated_parts_cost +
          ', ' +
          "'" +
          bh.input.body.garage_type +
          "', " +
          bh.input.body.fir_filed +
          ', ' +
          bh.input.body.valid_licence +
          ', ' +
          "'" +
          bh.input.body.loss_description +
          "', " +
          'NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ' +
          "'REGISTERED', NOW(), NOW());";
      } else {
        bh.local.query = 'select * from motor_claims.claims';
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sqlForClaim(bh, parentSpanInst);
      //appendnew_next_scriptForClaim
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VdNOf1bGiSZTj1BY',
        spanInst,
        'scriptForClaim'
      );
    }
  }

  async sqlForClaim(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sqlForClaim',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.tokenCreation(bh, parentSpanInst);
      //appendnew_next_sqlForClaim
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_seWkDaFVCimBM1tg',
        spanInst,
        'sqlForClaim'
      );
    }
  }

  async tokenCreation(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'tokenCreation',
      parentSpanInst
    );
    try {
      // 1. Token Endpoint URL
      bh.local.tokenUrl = 'https://ids-ctr-pt.neutrinos-apps.com/token';

      // 2. Headers
      // console.log("=============>>>>>before header");
      // bh.local.headers = {
      //     "Content-Type": "application/x-www-form-urlencoded",
      //     "Content-Length": "<calculated when request is sent>",
      //     "Host": "<calculated when request is sent>",
      //     "User-Agent": "PostmanRuntime/7.56.1",
      //     "Accept": "*/*",
      //     "Accept-Encoding": "gzip, deflate, br",
      //     "Connection": "keep-alive"
      // };
      bh.local.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      };

      // 3. Body (x-www-form-urlencoded format)
      const params = new URLSearchParams();
      params.append('client_id', '0ddh_euTKkSA682Yy5HuC');
      params.append(
        'client_secret',
        'e28WZR6ZKyrYILTSKKClFEwNlYoGR2cvISwFCoIXP4S7DJgsaqhHRSNqpoWgYbcx_DUlrSkoA1zS5uFOzP-J9C'
      ); // Replace with complete secret
      params.append('grant_type', 'client_credentials');

      bh.local.tokenBody = params.toString();
      console.log('=============>>>>>after header');
      // Debug Log
      console.log('Token Request Body:', bh.local.tokenBody);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_T8zfMMc3hCO1EerD(bh, parentSpanInst);
      //appendnew_next_tokenCreation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oQRXr74EptV0BoZD',
        spanInst,
        'tokenCreation'
      );
    }
  }

  async sd_T8zfMMc3hCO1EerD(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.tokenUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.tokenBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.tokenResult = responseMsg;
      bh = await this.bpmCall(bh, parentSpanInst);
      //appendnew_next_sd_T8zfMMc3hCO1EerD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_T8zfMMc3hCO1EerD');
    }
  }

  async bpmCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('bpmCall', parentSpanInst);
    try {
      // 1. Target Endpoint URL
      bh.local.token = bh.local.tokenResult.payload.access_token;
      //console.log("===============>token=======================>",bh.local.toke)
      console.log(
        '===============>token=======================>',
        bh.local.tokenResult.payload.access_token
      );

      bh.local.caseUrl =
        'https://alpha-pt.neutrinos-apps.com/caseservice/case/instance/create?branch=main';

      // 2. Request Headers (as shown in Postman)
      // bh.local.headers = {
      //     "accept": "application/json",
      //     "Content-Type": "application/json",
      //     "Authorization": "Bearer nqHeehdeVmv4_iv6JwN8xWiYSiCSiDoZg8il90OcUaN"
      // };

      // 3. Request Payload (Body)
      // Dynamic mapping from page and bh.local
      const claimData = {
        claim_id: bh.input.body.claim_id || '',
        policy_number: bh.input.body.policy_no || '',
        customerName: bh.input.body['Customer Name'] || '',
        vehicleRegistration: bh.input.body['Registration Number'] || '',
        vehicleType: bh.input.body['Vehicle Type'] || '',
        idv: Number(bh.input.body['IDV'] || 0),
        date_of_loss: bh.input.body.date_of_loss || '',
        intimationDate: new Date().toISOString().split('T')[0],
        lossType: bh.input.body.loss_code || '',
        part_group_code: bh.input.body.part_group_code || '',
        estimatedPartsCost: Number(bh.input.body.estimated_parts_cost || 0),
        garageType: bh.input.body.garage_type || '',
        netPayable: Number(bh.input.body.netPayable || 0),
        fire_file: String(Boolean(bh.input.body.fir_filed)),
      };

      console.log('api body------->', claimData);

      // Final Payload Construction
      bh.local.caseBody = {
        caseType: 'motor-damage-claim',
        caseData: claimData,
        wfData: claimData,
      };

      console.log('Dynamic Payload:', bh.local.caseBody);
      // Debug Log
      console.log('Case Service Payload:', bh.local.caseBody);

      console.log('token----------->', bh.local.token);
      // bh.local.bpmHeader = {
      //     "Content-Type": "application/x-www-form-urlencoded",
      //     "Content-Length": "<calculated when request is sent>",
      //     "Host": "<calculated when request is sent>",
      //     "User-Agent": "PostmanRuntime/7.56.1",
      //     "Accept": "*/*",
      //     "Accept-Encoding": "gzip, deflate, br",
      //     "Connection": "keep-alive",
      //     "Authorization": "Bearer " + bh.local.token
      // };
      bh.local.bpmHeader = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + bh.local.token,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QNoMWebK5lCffiL4(bh, parentSpanInst);
      //appendnew_next_bpmCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O1sDrjng07a9vWEJ',
        spanInst,
        'bpmCall'
      );
    }
  }

  async sd_QNoMWebK5lCffiL4(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.caseUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.bpmHeader,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.caseBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.caseResult = responseMsg;
      bh = await this.sd_ujw6UcSbJo4RKGqc(bh, parentSpanInst);
      //appendnew_next_sd_QNoMWebK5lCffiL4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QNoMWebK5lCffiL4');
    }
  }

  async sd_ujw6UcSbJo4RKGqc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ujw6UcSbJo4RKGqc',
      parentSpanInst
    );
    try {
      var claimId = bh.input.body.claim_id || '';

      bh.local.fetchNetpayableQuery = `
SELECT
    system_net_payable
FROM motor_claims.claims
WHERE claim_id = '${claimId}';
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yWPq0koeufslg7Uk(bh, parentSpanInst);
      //appendnew_next_sd_ujw6UcSbJo4RKGqc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ujw6UcSbJo4RKGqc',
        spanInst,
        'sd_ujw6UcSbJo4RKGqc'
      );
    }
  }

  async sd_yWPq0koeufslg7Uk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yWPq0koeufslg7Uk',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.netPayableResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.fetchNetpayableQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_h9MeXGj6MxMLLkVB(bh, parentSpanInst);
      //appendnew_next_sd_yWPq0koeufslg7Uk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yWPq0koeufslg7Uk',
        spanInst,
        'sd_yWPq0koeufslg7Uk'
      );
    }
  }

  async sd_h9MeXGj6MxMLLkVB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_h9MeXGj6MxMLLkVB',
      parentSpanInst
    );
    try {
      // Array check karke safe numeric extraction
      if (bh.local.netPayableResult && bh.local.netPayableResult.length > 0) {
        bh.local.netPayable = Number(
          bh.local.netPayableResult[0].system_net_payable || 0
        );
      } else {
        bh.local.netPayable = 0;
      }

      console.log('Extracted systemNetPayable:', bh.local.netPayable);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.scriptForClaimRegister(bh, parentSpanInst);
      //appendnew_next_sd_h9MeXGj6MxMLLkVB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h9MeXGj6MxMLLkVB',
        spanInst,
        'sd_h9MeXGj6MxMLLkVB'
      );
    }
  }

  async scriptForClaimRegister(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'scriptForClaimRegister',
      parentSpanInst
    );
    try {
      if (bh.local.flag == 1) {
        bh.local.response = {
          success: true,
          message: 'Claim registered successfully',
          data: {
            claimId: bh.input.body.claim_id,
            status: 'REGISTERED',
            netPayable: bh.local.netPayable,
            sla: 24,
          },
        };
      } else {
        bh.local.response = {
          success: false,
          message:
            'Date of Loss must be between ' +
            bh.local.fetchResult[0].policy_start_date +
            ' and ' +
            bh.local.fetchResult[0].policy_end_date,
        };
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xXyz8ep6LklEYU2g(bh, parentSpanInst);
      //appendnew_next_scriptForClaimRegister
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FAfO0Xx07ICV9JZ4',
        spanInst,
        'scriptForClaimRegister'
      );
    }
  }

  async sd_xXyz8ep6LklEYU2g(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xXyz8ep6LklEYU2g');
    }
  }

  async scriptForGetClaim(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'scriptForGetClaim',
      parentSpanInst
    );
    try {
      bh.local.query = `SELECT * FROM motor_claims.claims WHERE claim_id = '${bh.input.params.claimId}'`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sqlForClaimByClaimId(bh, parentSpanInst);
      //appendnew_next_scriptForGetClaim
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vOCLwURWa9aFaGgM',
        spanInst,
        'scriptForGetClaim'
      );
    }
  }

  async sqlForClaimByClaimId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sqlForClaimByClaimId',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xpjeZdDlkdGunvfz(bh, parentSpanInst);
      //appendnew_next_sqlForClaimByClaimId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6D6tVuZR9T9a18l4',
        spanInst,
        'sqlForClaimByClaimId'
      );
    }
  }

  async sd_xpjeZdDlkdGunvfz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xpjeZdDlkdGunvfz');
    }
  }

  async scriptForSurveyerAction(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'scriptForSurveyerAction',
      parentSpanInst
    );
    try {
      var b = bh.input.body; // Short alias for clean body access
      var action = b.action;
      var claimId = bh.input.params.claimId;

      // 1. Safe strings extraction
      var remark = (b.remark || '').replace(/'/g, "''");

      // 2. Settlement Reference Generator (STL-YYYY-XXXXXX)
      var year = new Date().getFullYear();
      var sequence = Math.floor(100000 + Math.random() * 900000);
      var settlementRef = `STL-${year}-${sequence}`;

      // 3. Dynamic deduction_trace parser
      var deductionTrace = '{}';
      if (b.deduction_trace) {
        if (typeof b.deduction_trace === 'object') {
          deductionTrace = JSON.stringify(b.deduction_trace);
        } else if (typeof b.deduction_trace === 'string') {
          deductionTrace = b.deduction_trace.replace(/\\"/g, '"');
        }
      }
      deductionTrace = deductionTrace.replace(/'/g, "''");

      // 4. Robust Number Extraction (snake_case + camelCase)
      var depreciatedParts =
        Number(b.depreciated_parts) ||
        Number(b.depParts) ||
        Number(b.depreciatedParts) ||
        0;
      var labourCost = Number(b.labour_cost) || Number(b.labourCost) || 0;
      var grossAssessed =
        Number(b.gross_assessed) ||
        Number(b.grossAssessed) ||
        Number(b.grossAssesed) ||
        0;
      var systemNetPayable =
        Number(b.system_net_payable) ||
        Number(b.netPayable) ||
        Number(b.systemNetPayable) ||
        0;

      switch (action) {
        case 'CONFIRM':
          var isManagerReq = String(b.isManagerReq).toLowerCase() === 'true';
          var targetStatus = isManagerReq ? 'MANAGER_APPROVAL' : 'SETTLED';

          // Agar Direct Settle ho raha hai tabhi settlement_ref set hoga, warna null/empty rahega manager approval tak
          var settlementRefVal = !isManagerReq ? `'${settlementRef}'` : 'NULL';

          bh.local.query = `
        UPDATE motor_claims.claims
        SET
            depreciated_parts = ${depreciatedParts},
            labour_cost = ${labourCost},
            gross_assessed = ${grossAssessed},
            system_net_payable = ${systemNetPayable},
            surveyor_net_payable = ${systemNetPayable},
            deduction_trace = '${deductionTrace}',
            surveyor_remarks = '${remark}',
            settlement_ref = ${settlementRefVal},
            status = '${targetStatus}',
            updated_at = NOW()
        WHERE claim_id = '${claimId}';
        `;
          break;

        case 'REVISE':
          var revisedNetPayable =
            Number(b.revised_net_payable) || Number(b.revisedNetPayable) || 0;

          bh.local.query = `
        UPDATE motor_claims.claims
        SET
            depreciated_parts = ${depreciatedParts},
            labour_cost = ${labourCost},
            gross_assessed = ${grossAssessed},
            system_net_payable = ${systemNetPayable},
            surveyor_net_payable = ${revisedNetPayable},
            deduction_trace = '${deductionTrace}',
            surveyor_remarks = '${remark}',
            status = 'MANAGER_APPROVAL',
            updated_at = NOW()
        WHERE claim_id = '${claimId}';
        `;
          break;

        case 'REPUDIATE':
          bh.local.query = `
        UPDATE motor_claims.claims
        SET
            depreciated_parts = ${depreciatedParts},
            labour_cost = ${labourCost},
            gross_assessed = ${grossAssessed},
            system_net_payable = ${systemNetPayable},
            surveyor_net_payable = 0.00,
            deduction_trace = '${deductionTrace}',
            surveyor_remarks = '${remark}',
            status = 'REPUDIATED',
            updated_at = NOW()
        WHERE claim_id = '${claimId}';
        `;
          break;

        default:
          throw new Error('Invalid Surveyor Action: ' + action);
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sqlForSurveyerAction(bh, parentSpanInst);
      //appendnew_next_scriptForSurveyerAction
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WIcwylTbW08lASr9',
        spanInst,
        'scriptForSurveyerAction'
      );
    }
  }

  async sqlForSurveyerAction(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sqlForSurveyerAction',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pzPFlDrRmwErStm0(bh, parentSpanInst);
      //appendnew_next_sqlForSurveyerAction
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zrRVOGLVV8vFDUd3',
        spanInst,
        'sqlForSurveyerAction'
      );
    }
  }

  async sd_pzPFlDrRmwErStm0(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pzPFlDrRmwErStm0');
    }
  }

  async scriptForManagerAction(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'scriptForManagerAction',
      parentSpanInst
    );
    try {
      // // Generate Settlement Reference
      // let year = new Date().getFullYear();
      // let sequence = Math.floor(100000 + Math.random() * 900000);

      // bh.local.settlementRef = `STL-${year}-${sequence}`;

      // switch (bh.input.body.action) {

      //     case "APPROVE":

      //         bh.local.query = `
      //         UPDATE motor_claims.claims
      //         SET
      //             manager_remarks = '${bh.input.body.remark}',
      //             settlement_ref = '${bh.local.settlementRef}',
      //             status = 'SETTLED',
      //             updated_at = NOW()
      //         WHERE claim_id = '${bh.input.params.claimId}';
      //         `;
      //         break;

      //     case "REJECT":

      //         bh.local.query = `
      //         UPDATE motor_claims.claims
      //         SET
      //             manager_remarks = '${bh.input.body.remark}',
      //             status = 'REJECTED',
      //             updated_at = NOW()
      //         WHERE claim_id = '${bh.input.params.claimId}';
      //         `;
      //         break;
      // }
      var b = bh.input.body;
      var action = b.action;
      var claimId = bh.input.params.claimId;

      // Safe strings extraction
      var remark = (b.remark || '').replace(/'/g, "''");
      var deductionTrace =
        typeof b.deduction_trace === 'object'
          ? JSON.stringify(b.deduction_trace)
          : b.deduction_trace || '{}';

      // Safe numbers extraction (Body se poora breakdown extract ho raha hai)
      var depreciatedParts = Number(b.depreciated_parts) || 0;
      var labourCost = Number(b.labour_cost) || 0;
      var grossAssessed = Number(b.gross_assessed) || 0;
      var systemNetPayable =
        Number(b.system_net_payable) || Number(b.netPayable) || 0;
      var surveyorNetPayable = Number(b.surveyor_net_payable) || 0;

      // Generate Settlement Reference
      var year = new Date().getFullYear();
      var sequence = Math.floor(100000 + Math.random() * 900000);
      bh.local.settlementRef = `STL-${year}-${sequence}`;

      switch (action) {
        case 'APPROVE':
          bh.local.query = `
        UPDATE motor_claims.claims
        SET
            depreciated_parts = ${depreciatedParts},
            labour_cost = ${labourCost},
            gross_assessed = ${grossAssessed},
            system_net_payable = ${systemNetPayable},
            surveyor_net_payable = ${surveyorNetPayable},
            deduction_trace = '${deductionTrace}',
            manager_remarks = '${remark}',
            settlement_ref = '${bh.local.settlementRef}',
            status = 'SETTLED',
            updated_at = NOW()
        WHERE claim_id = '${claimId}';
        `;
          break;

        case 'REJECT':
          bh.local.query = `
        UPDATE motor_claims.claims
        SET
            depreciated_parts = ${depreciatedParts},
            labour_cost = ${labourCost},
            gross_assessed = ${grossAssessed},
            system_net_payable = ${systemNetPayable},
            surveyor_net_payable = ${surveyorNetPayable},
            deduction_trace = '${deductionTrace}',
            manager_remarks = '${remark}',
            status = 'REJECTED',
            updated_at = NOW()
        WHERE claim_id = '${claimId}';
        `;
          break;

        default:
          throw new Error('Invalid Manager Action: ' + action);
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sqlForManagerAction(bh, parentSpanInst);
      //appendnew_next_scriptForManagerAction
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7mahdeNf95YXgIMg',
        spanInst,
        'scriptForManagerAction'
      );
    }
  }

  async sqlForManagerAction(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sqlForManagerAction',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_6AmkdtWuEpUXa8zs(bh, parentSpanInst);
      //appendnew_next_sqlForManagerAction
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P8QzwmEVaNBeSqLl',
        spanInst,
        'sqlForManagerAction'
      );
    }
  }

  async sd_6AmkdtWuEpUXa8zs(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6AmkdtWuEpUXa8zs');
    }
  }

  async sd_EGBkvt88yMWK7vAK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EGBkvt88yMWK7vAK',
      parentSpanInst
    );
    try {
      console.log('========== CATCH NODE ==========');
      let message = bh.error?.message || 'Internal Server Error';

      let statusCode = bh.error?.statusCode || 500;

      bh.local.statusCode = statusCode;

      bh.local.apiResponse = {
        success: false,
        message: message,
      };
      ``;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lpJlbT6RVqBFWgWD(bh, parentSpanInst);
      //appendnew_next_sd_EGBkvt88yMWK7vAK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EGBkvt88yMWK7vAK',
        spanInst,
        'sd_EGBkvt88yMWK7vAK'
      );
    }
  }

  async sd_lpJlbT6RVqBFWgWD(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.apiResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lpJlbT6RVqBFWgWD');
    }
  }

  async sd_cIypGfKOwa1mDKhN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cIypGfKOwa1mDKhN',
      parentSpanInst
    );
    try {
      console.log('========== CATCH NODE ==========');
      let message = bh.error?.message || 'Internal Server Error';

      let statusCode = bh.error?.statusCode || 500;

      bh.local.statusCode = statusCode;

      bh.local.apiResponse = {
        success: false,
        message: message,
      };
      ``;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fP2M6hz3SPdIbwhp(bh, parentSpanInst);
      //appendnew_next_sd_cIypGfKOwa1mDKhN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cIypGfKOwa1mDKhN',
        spanInst,
        'sd_cIypGfKOwa1mDKhN'
      );
    }
  }

  async sd_fP2M6hz3SPdIbwhp(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.apiResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fP2M6hz3SPdIbwhp');
    }
  }

  async sd_K9QVHxiYw0tjjJ0w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K9QVHxiYw0tjjJ0w',
      parentSpanInst
    );
    try {
      console.log('========== CATCH NODE ==========');
      let message = bh.error?.message || 'Internal Server Error';

      let statusCode = bh.error?.statusCode || 500;

      bh.local.statusCode = statusCode;

      bh.local.apiResponse = {
        success: false,
        message: message,
      };
      ``;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pzPbL3ztxgT9c08F(bh, parentSpanInst);
      //appendnew_next_sd_K9QVHxiYw0tjjJ0w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K9QVHxiYw0tjjJ0w',
        spanInst,
        'sd_K9QVHxiYw0tjjJ0w'
      );
    }
  }

  async sd_pzPbL3ztxgT9c08F(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.apiResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pzPbL3ztxgT9c08F');
    }
  }

  async sd_s1P43hWKEtNw9t2a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_s1P43hWKEtNw9t2a',
      parentSpanInst
    );
    try {
      console.log('========== CATCH NODE ==========');
      let message = bh.error?.message || 'Internal Server Error';

      let statusCode = bh.error?.statusCode || 500;

      bh.local.statusCode = statusCode;

      bh.local.apiResponse = {
        success: false,
        message: message,
      };
      ``;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dSB533XBEAsZRfzi(bh, parentSpanInst);
      //appendnew_next_sd_s1P43hWKEtNw9t2a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_s1P43hWKEtNw9t2a',
        spanInst,
        'sd_s1P43hWKEtNw9t2a'
      );
    }
  }

  async sd_dSB533XBEAsZRfzi(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.apiResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dSB533XBEAsZRfzi');
    }
  }

  async sd_QWjoIlcRIlAaBWJ3(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QWjoIlcRIlAaBWJ3');
    }
  }

  async sd_zZwEFGpJeOHK4zUy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zZwEFGpJeOHK4zUy',
      parentSpanInst
    );
    try {
      bh.local.query = `
SELECT
    policy_start_date,
    policy_end_date
FROM motor_claims.policies
WHERE policy_no = '${bh.input.params.policyNo}';
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7owV2ap2to4oPfmg(bh, parentSpanInst);
      //appendnew_next_sd_zZwEFGpJeOHK4zUy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zZwEFGpJeOHK4zUy',
        spanInst,
        'sd_zZwEFGpJeOHK4zUy'
      );
    }
  }

  async sd_7owV2ap2to4oPfmg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7owV2ap2to4oPfmg',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bfryDKo14MPOkQkv(bh, parentSpanInst);
      //appendnew_next_sd_7owV2ap2to4oPfmg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7owV2ap2to4oPfmg',
        spanInst,
        'sd_7owV2ap2to4oPfmg'
      );
    }
  }

  async sd_bfryDKo14MPOkQkv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bfryDKo14MPOkQkv',
      parentSpanInst
    );
    try {
      console.log('start day ', bh.local.result[0].policy_start_date);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_uC3fZQmn1Ry74e1P(bh, parentSpanInst);
      //appendnew_next_sd_bfryDKo14MPOkQkv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bfryDKo14MPOkQkv',
        spanInst,
        'sd_bfryDKo14MPOkQkv'
      );
    }
  }

  async sd_uC3fZQmn1Ry74e1P(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uC3fZQmn1Ry74e1P');
    }
  }

  async prepareCasePayload(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareCasePayload',
      parentSpanInst
    );
    try {
      // bh.local.claimStatus = "SETTLED";
      // let year = new Date().getFullYear();
      // let sequence = Math.floor(100000 + Math.random() * 900000);

      // bh.local.settlementRef = `STL-${year}-${sequence}`;
      // // 2. Direct Postgres DB Update query parameterize karein
      // bh.local.updateQuery = `
      //     UPDATE motor_claims.claims
      //     SET
      //         status = '${bh.local.claimStatus}',
      //         settlement_ref = '${bh.local.settlementRef}',
      //         updated_at = NOW()
      //     WHERE claim_id = '${bh.input.params.claimId}';
      // `;

      // //console.log(`Claim ${bh.local.claimId} auto-settled with Ref: ${bh.local.settlementRef}`);
      // 1. Target ID Extraction
      var claimId =
        bh.input.params?.claimId ||
        bh.input.body?.claim_id ||
        bh.input.body?.claimId;

      // 2. Body Payload + Process Fallbacks (Handles camelCase & snake_case)
      var body = bh.input.body || {};

      var netPayable = Number(
        body.netPayable ||
          body.system_net_payable ||
          body.net_payable ||
          bh.local.netPayable ||
          0
      );
      var grossAssessed = Number(
        body.grossAssessed || body.gross_assessed || bh.local.grossAssessed || 0
      );
      var labourCost = Number(
        body.labourCost || body.labour_cost || bh.local.labourCost || 0
      );
      var depreciatedParts = Number(
        body.depreciatedParts ||
          body.depreciated_parts ||
          body.depParts ||
          bh.local.depreciatedParts ||
          0
      );

      // 3. Deduction Trace Processing
      var traceObj =
        body.deduction_trace ||
        body.deductionTrace ||
        bh.local.deduction_trace ||
        {};
      var deductionTraceStr =
        typeof traceObj === 'object'
          ? JSON.stringify(traceObj)
          : String(traceObj);

      // 4. Auto Settlement Reference Generation
      bh.local.claimStatus = 'SETTLED';
      var year = new Date().getFullYear();
      var sequence = Math.floor(100000 + Math.random() * 900000);
      bh.local.settlementRef = `STL-${year}-${sequence}`;

      // 5. Postgres Update Query
      bh.local.updateQuery = `
    UPDATE motor_claims.claims
    SET 
        status = '${bh.local.claimStatus}',
        settlement_ref = '${bh.local.settlementRef}',
        gross_assessed = ${grossAssessed},
        labour_cost = ${labourCost},
        depreciated_parts = ${depreciatedParts},
        system_net_payable = ${netPayable},
        surveyor_net_payable = ${netPayable},
        deduction_trace = '${deductionTraceStr}'::jsonb,
        updated_at = NOW()
    WHERE claim_id = '${claimId}';
`;

      console.log(
        `Auto-settlement Query generated for Claim ${claimId} with netPayable: ${netPayable}`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aO2oT6kuQvg32iWS(bh, parentSpanInst);
      //appendnew_next_prepareCasePayload
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RyaO1cY5cxrQTY6l',
        spanInst,
        'prepareCasePayload'
      );
    }
  }

  async sd_aO2oT6kuQvg32iWS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aO2oT6kuQvg32iWS',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.updateQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fNKSLQB3VN88oPRM(bh, parentSpanInst);
      //appendnew_next_sd_aO2oT6kuQvg32iWS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aO2oT6kuQvg32iWS',
        spanInst,
        'sd_aO2oT6kuQvg32iWS'
      );
    }
  }

  async sd_fNKSLQB3VN88oPRM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fNKSLQB3VN88oPRM',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      await this.httpOut(bh, parentSpanInst);
      //appendnew_next_sd_fNKSLQB3VN88oPRM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fNKSLQB3VN88oPRM',
        spanInst,
        'sd_fNKSLQB3VN88oPRM'
      );
    }
  }

  async httpOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fnk95lz3fLrOKHC2');
    }
  }

  async sd_r83hE1V7HNcX5MHd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r83hE1V7HNcX5MHd',
      parentSpanInst
    );
    try {
      bh.local.query = `
SELECT
    status
FROM motor_claims.policies
WHERE policy_no = '${bh.input.params.policyNo}';
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_E4pfXMxC1AdwNRtE(bh, parentSpanInst);
      //appendnew_next_sd_r83hE1V7HNcX5MHd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r83hE1V7HNcX5MHd',
        spanInst,
        'sd_r83hE1V7HNcX5MHd'
      );
    }
  }

  async sd_E4pfXMxC1AdwNRtE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E4pfXMxC1AdwNRtE',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_q0QNohqmN3gc5Hqz(bh, parentSpanInst);
      //appendnew_next_sd_E4pfXMxC1AdwNRtE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E4pfXMxC1AdwNRtE',
        spanInst,
        'sd_E4pfXMxC1AdwNRtE'
      );
    }
  }

  async sd_q0QNohqmN3gc5Hqz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_q0QNohqmN3gc5Hqz',
      parentSpanInst
    );
    try {
      bh.local.checkStatus = bh.local.result[0].status;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KYQwyd8jYXTITUHx(bh, parentSpanInst);
      //appendnew_next_sd_q0QNohqmN3gc5Hqz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_q0QNohqmN3gc5Hqz',
        spanInst,
        'sd_q0QNohqmN3gc5Hqz'
      );
    }
  }

  async sd_KYQwyd8jYXTITUHx(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.checkStatus);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KYQwyd8jYXTITUHx');
    }
  }

  async findNetPayable(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'findNetPayable',
      parentSpanInst
    );
    try {
      var claimId = bh.input.params.claimId;

      bh.local.query = `
    SELECT surveyor_net_payable 
    FROM motor_claims.claims 
    WHERE claim_id = '${claimId}';
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Z315JeQpRRrFfFGb(bh, parentSpanInst);
      //appendnew_next_findNetPayable
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hhypoi0dOhDB9bzf',
        spanInst,
        'findNetPayable'
      );
    }
  }

  async sd_Z315JeQpRRrFfFGb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Z315JeQpRRrFfFGb',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.netPayableResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dn12DuzeAqYoI4eL(bh, parentSpanInst);
      //appendnew_next_sd_Z315JeQpRRrFfFGb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z315JeQpRRrFfFGb',
        spanInst,
        'sd_Z315JeQpRRrFfFGb'
      );
    }
  }

  async sd_dn12DuzeAqYoI4eL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dn12DuzeAqYoI4eL',
      parentSpanInst
    );
    try {
      // Array check aur object key extraction
      console.log(
        'Extracted Integer bh.local.netPayableResult <=======================>:',
        bh.local.netPayableResult
      );
      if (bh.local.netPayableResult && bh.local.netPayableResult.length > 0) {
        // Single Integer value assignment
        bh.local.netPayable =
          Number(bh.local.netPayableResult[0].surveyor_net_payable) || 0;
      } else {
        bh.local.netPayable = 0;
      }

      console.log(
        'Extracted Integer Net Payable<==============>:',
        bh.local.netPayable
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_KUdaly6IhT2gf2qD(bh, parentSpanInst);
      //appendnew_next_sd_dn12DuzeAqYoI4eL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dn12DuzeAqYoI4eL',
        spanInst,
        'sd_dn12DuzeAqYoI4eL'
      );
    }
  }

  async sd_KUdaly6IhT2gf2qD(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.netPayableResult);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KUdaly6IhT2gf2qD');
    }
  }

  async sd_B1fByphVxFOWFwyn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B1fByphVxFOWFwyn',
      parentSpanInst
    );
    try {
      var b = bh.input.body || {};
      var claimId = bh.input.params?.claimId || b.claim_id || b.claimId;

      // Safe Numeric Extractions
      var labourCost = Number(b.labour_cost || b.labourCost || 0);
      var systemNetPayable = Number(
        b.system_net_payable || b.netPayable || b.systemNetPayable || 0
      );
      var grossAssessed = Number(
        b.gross_assessed || b.grossAssessed || b.grossAssesed || 0
      );

      bh.local.query = `
    UPDATE motor_claims.claims
    SET
        labour_cost = ${labourCost},
        system_net_payable = ${systemNetPayable},
        gross_assessed = ${grossAssessed}
    WHERE claim_id = '${claimId}';
`;

      console.log(`Update Query Executed for Claim ${claimId}`);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nJIjPzRLml5qtKsT(bh, parentSpanInst);
      //appendnew_next_sd_B1fByphVxFOWFwyn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B1fByphVxFOWFwyn',
        spanInst,
        'sd_B1fByphVxFOWFwyn'
      );
    }
  }

  async sd_nJIjPzRLml5qtKsT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nJIjPzRLml5qtKsT',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_c89k8zRbF9ofE0PK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_2y0E52T5Ff3meUcH(bh, parentSpanInst);
      //appendnew_next_sd_nJIjPzRLml5qtKsT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nJIjPzRLml5qtKsT',
        spanInst,
        'sd_nJIjPzRLml5qtKsT'
      );
    }
  }

  async sd_2y0E52T5Ff3meUcH(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2y0E52T5Ff3meUcH');
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
      (await this.sd_C9cqXXv5vEWafq3n(bh, parentSpanInst)) ||
      (await this.sd_v5P1wFiuWudrVKGw(bh, parentSpanInst)) ||
      (await this.sd_FkfeWtVTF2eHZ1XZ(bh, parentSpanInst)) ||
      (await this.sd_iGme6j8NHSVpVLl9(bh, parentSpanInst)) ||
      (await this.sd_8aw1Wepjvo5OtFQo(bh, parentSpanInst))
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
  async sd_C9cqXXv5vEWafq3n(bh, parentSpanInst) {
    const nodes = [
      'sd_VdNOf1bGiSZTj1BY',
      'sd_seWkDaFVCimBM1tg',
      'sd_lSRRMA0laK1eOGk0',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_EGBkvt88yMWK7vAK(bh, parentSpanInst);
      //appendnew_next_sd_C9cqXXv5vEWafq3n
      return true;
    }
    return false;
  }
  async sd_v5P1wFiuWudrVKGw(bh, parentSpanInst) {
    const nodes = ['sd_vOCLwURWa9aFaGgM', 'sd_6D6tVuZR9T9a18l4'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_cIypGfKOwa1mDKhN(bh, parentSpanInst);
      //appendnew_next_sd_v5P1wFiuWudrVKGw
      return true;
    }
    return false;
  }
  async sd_FkfeWtVTF2eHZ1XZ(bh, parentSpanInst) {
    const nodes = ['sd_WIcwylTbW08lASr9', 'sd_zrRVOGLVV8vFDUd3'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_K9QVHxiYw0tjjJ0w(bh, parentSpanInst);
      //appendnew_next_sd_FkfeWtVTF2eHZ1XZ
      return true;
    }
    return false;
  }
  async sd_iGme6j8NHSVpVLl9(bh, parentSpanInst) {
    const nodes = ['sd_7mahdeNf95YXgIMg', 'sd_P8QzwmEVaNBeSqLl'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_s1P43hWKEtNw9t2a(bh, parentSpanInst);
      //appendnew_next_sd_iGme6j8NHSVpVLl9
      return true;
    }
    return false;
  }
  async sd_8aw1Wepjvo5OtFQo(bh, parentSpanInst) {
    const nodes = [
      'sd_Co7m3tBEgoaEaTO7',
      'sd_4D6Q0R1fXx1ExVO1',
      'sd_qSYpcmsrX5ojENYQ',
      'sd_4neUItJPUSEOE6QR',
    ];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_QWjoIlcRIlAaBWJ3(bh, parentSpanInst);
      //appendnew_next_sd_8aw1Wepjvo5OtFQo
      return true;
    }
    return false;
  }
  //appendnew_flow_motor_claim_Catch
}

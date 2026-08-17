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
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.getPolicyDetails(bh, parentSpanInst);
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
      bh = await this.scriptForClaimRegister(bh, parentSpanInst);
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
            netPayable: 0,
            sla: null,
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
        'sd_lSRRMA0laK1eOGk0',
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
      switch (bh.input.body.action) {
        case 'CONFIRM':
          bh.local.query = `
        UPDATE motor_claims.claims
        SET
            surveyor_remarks = '${bh.input.body.remark}',
            status = 'MANAGER_APPROVAL',
            updated_at = NOW()
        WHERE claim_id = '${bh.input.params.claimId}';
        `;
          break;

        case 'REVISE':
          bh.local.query = `
        UPDATE motor_claims.claims
        SET
            surveyor_net_payable = ${bh.input.body.revised_net_payable},
            surveyor_remarks = '${bh.input.body.remark}',
            status = 'MANAGER_APPROVAL',
            updated_at = NOW()
        WHERE claim_id = '${bh.input.params.claimId}';
        `;
          break;

        case 'REPUDIATE':
          bh.local.query = `
        UPDATE motor_claims.claims
        SET
            surveyor_remarks = '${bh.input.body.remark}',
            status = 'REPUDIATED',
            updated_at = NOW()
        WHERE claim_id = '${bh.input.params.claimId}';
        `;
          break;
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
      // Generate Settlement Reference
      let year = new Date().getFullYear();
      let sequence = Math.floor(100000 + Math.random() * 900000);

      bh.local.settlementRef = `STL-${year}-${sequence}`;

      switch (bh.input.body.action) {
        case 'APPROVE':
          bh.local.query = `
        UPDATE motor_claims.claims
        SET
            manager_remarks = '${bh.input.body.remark}',
            settlement_ref = '${bh.local.settlementRef}',
            status = 'SETTLED',
            updated_at = NOW()
        WHERE claim_id = '${bh.input.params.claimId}';
        `;
          break;

        case 'REJECT':
          bh.local.query = `
        UPDATE motor_claims.claims
        SET
            manager_remarks = '${bh.input.body.remark}',
            status = 'REJECTED',
            updated_at = NOW()
        WHERE claim_id = '${bh.input.params.claimId}';
        `;
          break;
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

  async sd_0TAbzEZOcSWswUIb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0TAbzEZOcSWswUIb',
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
      await this.sd_QWjoIlcRIlAaBWJ3(bh, parentSpanInst);
      //appendnew_next_sd_0TAbzEZOcSWswUIb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0TAbzEZOcSWswUIb',
        spanInst,
        'sd_0TAbzEZOcSWswUIb'
      );
    }
  }

  async sd_QWjoIlcRIlAaBWJ3(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.apiResponse);

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
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_0TAbzEZOcSWswUIb(bh, parentSpanInst);
      //appendnew_next_sd_8aw1Wepjvo5OtFQo
      return true;
    }
    return false;
  }
  //appendnew_flow_motor_claim_Catch
}

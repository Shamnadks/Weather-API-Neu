// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_GegIgMqH65Yf9d1y from './weatherflow'; //_splitter_
//append_imports_end
export class weatherapi {
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
    this.serviceName = 'weatherapi';
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
      instance = new weatherapi(
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
    //appendnew_flow_weatherapi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: weatherapi');
    //appendnew_flow_weatherapi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: weatherapi');

    this.app['get'](
      `${this.serviceBasePath}/getweather`,
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
          bh = await this.sd_XCjkDp0QAJHaOOHi(bh, parentSpanInst);
          //appendnew_next_sd_1SmRRUHFAOehrKeY
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1SmRRUHFAOehrKeY');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_weatherapi_HttpIn
  }
  //   service flows_weatherapi

  //appendnew_flow_weatherapi_start

  async sd_XCjkDp0QAJHaOOHi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XCjkDp0QAJHaOOHi',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_GegIgMqH65Yf9d1yInstance: SSD_SERVICE_ID_sd_GegIgMqH65Yf9d1y.weatherflow =
        SSD_SERVICE_ID_sd_GegIgMqH65Yf9d1y.weatherflow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_GegIgMqH65Yf9d1yInstance.apicallflow(
          spanInst,
          bh.input.query.place
        );
      bh.local.weatherdata = outputVariables.local.weatherdata;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MJoqS9u3ZmQgjQZW(bh, parentSpanInst);
      //appendnew_next_sd_XCjkDp0QAJHaOOHi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XCjkDp0QAJHaOOHi',
        spanInst,
        'sd_XCjkDp0QAJHaOOHi'
      );
    }
  }

  async sd_MJoqS9u3ZmQgjQZW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MJoqS9u3ZmQgjQZW',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_GegIgMqH65Yf9d1yInstance: SSD_SERVICE_ID_sd_GegIgMqH65Yf9d1y.weatherflow =
        SSD_SERVICE_ID_sd_GegIgMqH65Yf9d1y.weatherflow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_GegIgMqH65Yf9d1yInstance.getforecast(
          spanInst,
          bh.input.query.place
        );
      bh.local.forecastdata = outputVariables.local.forecastdata;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3PlIKMka4AjtBwFD(bh, parentSpanInst);
      //appendnew_next_sd_MJoqS9u3ZmQgjQZW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MJoqS9u3ZmQgjQZW',
        spanInst,
        'sd_MJoqS9u3ZmQgjQZW'
      );
    }
  }

  async sd_3PlIKMka4AjtBwFD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3PlIKMka4AjtBwFD',
      parentSpanInst
    );
    try {
      if (bh.local?.weatherdata?.payload) {
        bh.local.weatherdata = {
          statusCode: 200,
          data: {
            weatherdata: bh.local?.weatherdata?.payload,
            forecastdata: bh.local?.forecastdata?.payload,
          },
        };
      }
      console.log(bh.local.resultdata);
      console.log(bh.local);
      console.log(bh.input);
      throw new Error('Place Not Found');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_u0mUWFQW3IpCDq6s(bh, parentSpanInst);
      //appendnew_next_sd_3PlIKMka4AjtBwFD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3PlIKMka4AjtBwFD',
        spanInst,
        'sd_3PlIKMka4AjtBwFD'
      );
    }
  }

  async sd_u0mUWFQW3IpCDq6s(bh, parentSpanInst) {
    try {
      bh.web.res
        .status(bh.local.weatherdata.statusCode)
        .send(bh.local.weatherdata.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_u0mUWFQW3IpCDq6s');
    }
  }

  async errorCode(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('errorCode', parentSpanInst);
    try {
      bh.local.weatherdata = {
        statusCode: 400,
        error: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_qsm0Q5kb8v9QAxHh(bh, parentSpanInst);
      //appendnew_next_errorCode
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hoPH4UFk0A4fwhRI',
        spanInst,
        'errorCode'
      );
    }
  }

  async sd_qsm0Q5kb8v9QAxHh(bh, parentSpanInst) {
    try {
      bh.web.res
        .status(bh.local.weatherdata.statusCode)
        .send(bh.local.weatherdata.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qsm0Q5kb8v9QAxHh');
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
      (await this.exceptionHandling(bh, parentSpanInst))
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
  async exceptionHandling(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_hoPH4UFk0A4fwhRI', 'sd_qsm0Q5kb8v9QAxHh'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.errorCode(bh, parentSpanInst);
    //appendnew_next_exceptionHandling
    return true;
  }
  //appendnew_flow_weatherapi_Catch
}

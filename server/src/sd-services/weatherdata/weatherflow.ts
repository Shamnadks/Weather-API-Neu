// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class weatherflow {
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
    this.serviceName = 'weatherflow';
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
      instance = new weatherflow(
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
    //appendnew_flow_weatherflow_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: weatherflow');
    //appendnew_flow_weatherflow_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: weatherflow');
    //appendnew_flow_weatherflow_HttpIn
  }
  //   service flows_weatherflow

  async apicallflow(parentSpanInst, place: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'apicallflow',
      parentSpanInst
    );
    let bh: any = {
      input: {
        place,
      },
      local: {
        weatherdata: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.urls(bh, parentSpanInst);
      //appendnew_next_apicallflow
      return (
        // formatting output variables
        {
          input: {},
          local: {
            weatherdata: bh.local.weatherdata,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Tj8lj7VfOLOLzjuH',
        spanInst,
        'apicallflow'
      );
    }
  }

  async getforecast(parentSpanInst, place: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getforecast',
      parentSpanInst
    );
    let bh: any = {
      input: {
        place,
      },
      local: {
        forecastdata: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1bxbftYizR1GO8Tg(bh, parentSpanInst);
      //appendnew_next_getforecast
      return (
        // formatting output variables
        {
          input: {},
          local: {
            forecastdata: bh.local.forecastdata,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VgrZX4J1YJTICyaV',
        spanInst,
        'getforecast'
      );
    }
  }
  //appendnew_flow_weatherflow_start

  async urls(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('urls', parentSpanInst);
    try {
      bh.local.url = `${process.env.WEATHER_API_URL}/weather?q=${bh.input.place}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getweather(bh, parentSpanInst);
      //appendnew_next_urls
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_83ADjuroSa0OEpPv',
        spanInst,
        'urls'
      );
    }
  }

  async getweather(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
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

      bh.local.weatherdata = responseMsg;
      bh = await this.output(bh, parentSpanInst);
      //appendnew_next_getweather
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ipDDhSUQyrc1CaG5');
    }
  }

  async output(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('output', parentSpanInst);
    try {
      bh.local.weatherdata = bh.local.weatherdata;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_output
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YZqUnWxsoxnjilFW',
        spanInst,
        'output'
      );
    }
  }

  async sd_1bxbftYizR1GO8Tg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1bxbftYizR1GO8Tg',
      parentSpanInst
    );
    try {
      bh.local.url2 = `${process.env.WEATHER_API_URL}/forecast?q=${bh.input.place}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fe2bH1rWIxUqAVLt(bh, parentSpanInst);
      //appendnew_next_sd_1bxbftYizR1GO8Tg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1bxbftYizR1GO8Tg',
        spanInst,
        'sd_1bxbftYizR1GO8Tg'
      );
    }
  }

  async sd_fe2bH1rWIxUqAVLt(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url2,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
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

      bh.local.forecastdata = responseMsg;
      bh = await this.outputforecat(bh, parentSpanInst);
      //appendnew_next_sd_fe2bH1rWIxUqAVLt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fe2bH1rWIxUqAVLt');
    }
  }

  async outputforecat(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'outputforecat',
      parentSpanInst
    );
    try {
      bh.local.forecastdata = bh.local.forecastdata;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_outputforecat
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_96njEwgGfouXRQz3',
        spanInst,
        'outputforecat'
      );
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
      //appendnew_next_errorCode
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jqPRxHmZmZYdcZBv',
        spanInst,
        'errorCode'
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
    const catchConnectedNodes = ['sd_jqPRxHmZmZYdcZBv'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.errorCode(bh, parentSpanInst);
    //appendnew_next_exceptionHandling
    return true;
  }
  //appendnew_flow_weatherflow_Catch
}

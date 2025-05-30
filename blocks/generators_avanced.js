Blockly.Python.forBlock['print'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = `print(${value_value})\n`;
    return code;
};

Blockly.JavaScript.forBlock['print'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `Serial.println(${value_value})\n`;
    return code;
};

Blockly.Python.forBlock['dht_read'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_dht'] = 'import dht';

  var functionName = Blockly.Python.provideFunction_(
    'DHT_Read',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(type, pin):',
    '  try:',
    '    if type == 11:',
    '      d = dht.DHT11(Pin(pin))',
    '    elif type == 22:',
    '      d = dht.DHT22(Pin(pin))',
    '    else:',
    '      return [ -999, -999 ]',
    '    d.measure()',
    '    return [ d.temperature(), d.humidity() ]',
    '  except:',
    '    print("DHT read error")',
    '    return [ -999, -999 ]']);

    var dropdown_type = block.getFieldValue('type');
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var dropdown_valueindex = block.getFieldValue('valueIndex');
    var code = `${functionName}(${dropdown_type}, ${value_pin})[${dropdown_valueindex}]`;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python.forBlock['ds18x20_read'] = function(block) {
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_onewire'] = 'import onewire';
    Blockly.Python.definitions_['import_ds18x20'] = 'import ds18x20';
  
    var functionName = Blockly.Python.provideFunction_(
      'DS18x20_Read',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin):',
      '  ds = ds18x20.DS18X20(onewire.OneWire(Pin(pin)))',
      '  roms = ds.scan()',
      '  try:',
      '    ds.convert_temp()',
      '  except:',
      '    return 0',
      '  sleep(0.75)',
      '  for rom in roms:',
      '    return ds.read_temp(rom)',
      '  return 0']);
  
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var code = `${functionName}(${value_pin})`;
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python.forBlock['rtc_set_time'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var value_hour = Blockly.Python.valueToCode(block, 'hour', Blockly.Python.ORDER_ATOMIC);
    var value_min = Blockly.Python.valueToCode(block, 'min', Blockly.Python.ORDER_ATOMIC);
    var value_sec = Blockly.Python.valueToCode(block, 'sec', Blockly.Python.ORDER_ATOMIC);
    var value_day = Blockly.Python.valueToCode(block, 'day', Blockly.Python.ORDER_ATOMIC);
    var value_month = Blockly.Python.valueToCode(block, 'month', Blockly.Python.ORDER_ATOMIC);
    var value_year = Blockly.Python.valueToCode(block, 'year', Blockly.Python.ORDER_ATOMIC);

    var code = `RTC().datetime((${value_year}, ${value_month}, ${value_day}, ${value_hour}, ${value_min}, ${value_sec}, 0, 0))\n`;
    return code;
};

Blockly.Python.forBlock['rtc_get_hour'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

  var code = 'RTC().datetime()[4]';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python.forBlock['rtc_get_min'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var code = 'RTC().datetime()[5]';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python.forBlock['rtc_get_sec'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var code = 'RTC().datetime()[6]';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python.forBlock['rtc_get_day'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var code = 'RTC().datetime()[2]';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python.forBlock['rtc_get_month'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var code = 'RTC().datetime()[1]';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python.forBlock['rtc_get_year'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var code = 'RTC().datetime()[0]';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python.forBlock['rtc_get_microsecond'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var code = 'RTC().datetime()[6]';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python.forBlock['rtc_sync_ntp'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';
    Blockly.Python.definitions_['import_ntptime'] = 'import ntptime';

    var code = 'ntptime.settime()\n';
    return code;
  };

Blockly.Python.forBlock['light_sleep'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';

    var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
    var code = `machine.lightsleep(${value_time} * 1000)\n`;
    return code;
};

Blockly.Python.forBlock['deep_sleep'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';

    var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
    var code = `machine.deepsleep(${value_time} * 1000)\n`;
    return code;
};

Blockly.Python.forBlock['is_woke_from_deep_sleep'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';

    var code = '(machine.reset_cause() == machine.DEEPSLEEP_RESET)';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python.forBlock['send_into_source'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_source = Blockly.Python.valueToCode(block, 'source', Blockly.Python.ORDER_ATOMIC);

    var code = `print(str(${value_source}) + "=" + str(${value_value}))\n`;
    return code;
};

Blockly.JavaScript['send_into_source'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var value_source = Blockly.JavaScript.valueToCode(block, 'source', Blockly.JavaScript.ORDER_ATOMIC);

    var code = `Serial.println(${value_source} + "=" + String(${value_value}));\n`;
    return code;
};

Blockly.Python.forBlock['board_reset'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';

    var code = `machine.reset()\n`;
    return code;
};

Blockly.Python.forBlock['run_in_background'] = function(block) {
    Blockly.Python.definitions_['import__thread'] = 'import _thread';

    var statements_callback = Blockly.Python.statementToCode(block, 'callback');

    // -----------------------------
    var globals = [];
    var varName;
    var workspace = block.workspace;
    var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
    for (var i = 0, variable; variable = variables[i]; i++) {
      varName = variable.name;
      if (block.getVars().indexOf(varName) == -1) {
        globals.push(Blockly.Python.nameDB_.getName(varName,
            Blockly.VARIABLE_CATEGORY_NAME));
      }
    }
    // Add developer variables.
    var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
      globals.push(Blockly.Python.nameDB_.getName(devVarList[i],
          Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    }
  
    globals = globals.length ?
        Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
    // -----------------------------

    if (typeof nextRunInBackground !== "number") {
        nextRunInBackground = 1;
    }

    var functionName = Blockly.Python.provideFunction_(
        'runInBackground_' + nextRunInBackground,
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        globals,
        statements_callback]);

    var code = `_thread.start_new_thread(${functionName}, ())\n`;

    nextRunInBackground++;
    return code;
};

Blockly.Python.forBlock['import'] = function(block) {
    var dropdown_file_name = block.getFieldValue('file_name');
    Blockly.Python.definitions_['import_' + dropdown_file_name] = 'import ' + dropdown_file_name.replace(/\.(py|xml)/, "");
    
    return "";
};

Blockly.Python.forBlock['call_import'] = function(block) {
    const function_detail = JSON.parse(block.getFieldValue('object')) || { };
    const file_name = function_detail?.file || "";

    Blockly.Python.definitions_['import_' + file_name] = 'import ' + file_name.replace(/\.(py|xml)/, "");

    const variable = [];
    for (const { name } of this.inputList) {
        if (name.length > 0) {
            variable.push(Blockly.Python.valueToCode(block, name, Blockly.Python.ORDER_ATOMIC) || "None");
        }
    }
    
    const code = `${file_name.replace(/\.(py|xml)/, "")}.${function_detail.function}(${variable.join(", ")})`;
    if (function_detail.output) {
        return [code, Blockly.Python.ORDER_NONE];
    }   

    return code + "\n";
};
  

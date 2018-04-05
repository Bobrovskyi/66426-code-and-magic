'use strict';

window.renderStatistics = function(ctx, names, times) {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var OFFSET = 25;
  var CLOUD_SHADOW_OFFSET = 10;
  var CLOUD_COLOR = '#ffffff';
  var TEXT_COLOR = '#666666';
  var FONT_SIZE = 16;
  var FONT = '16px PT Mono';
  var LINE_HEIGHT = 20;
  var CLOUD_COLOR_SHADOW = 'rgba(0, 0, 0, 0.7)';
  var CLOUD_TITLE = ['Ура вы победили!', 'Список результатов'];

  var COLUMN_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var COLUMN_INTERVAL = 50;
  var COLUMN_COLOR_DEFAULT = 'rgba(255, 0, 0, .7)';

  function drawCloud() {
    ctx.fillStyle = CLOUD_COLOR_SHADOW;
    var cloudShadowX = CLOUD_X + CLOUD_SHADOW_OFFSET;
    var cloudShadowY = CLOUD_Y + CLOUD_SHADOW_OFFSET;
    var cloudShadowWidth = CLOUD_WIDTH + CLOUD_SHADOW_OFFSET;
    var cloudShadowHeight = CLOUD_HEIGHT + CLOUD_SHADOW_OFFSET;
    ctx.fillRect(cloudShadowX, cloudShadowY, cloudShadowWidth, cloudShadowHeight);
    ctx.fillStyle = CLOUD_COLOR;
    ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  }

  function drawText(text, x, y, font, color) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }

  function drawTitle(title) {
    for (var i = 0; i < title.length; i++) {
      var offsetY = LINE_HEIGHT * (i + 1.5);
      var titlePosX = CLOUD_X + OFFSET;
      var titlePosY = CLOUD_Y + offsetY;
      drawText(title[i], titlePosX, titlePosY, FONT, TEXT_COLOR);
    }
  }

  function drawCharts() {
    var beginPosX = CLOUD_X + OFFSET;
    for (var i = 0; i < names.length; i++) {
      var posX = beginPosX + (i * COLUMN_INTERVAL);
      var posY = CLOUD_HEIGHT - OFFSET - COLUMN_HEIGHT;
      var width = COLUMN_WIDTH;
      var height = COLUMN_HEIGHT;
      var color = names[i] === 'Вы' ? COLUMN_COLOR_DEFAULT : getRandomColor();
      drawChart(posX, posY, width, height, color);
      var posYNames = CLOUD_HEIGHT - OFFSET + OFFSET;
      var posYtimes = CLOUD_HEIGHT - COLUMN_HEIGHT - 1.5 * OFFSET;
      var time = Math.round(times[i]);
      drawText(names[i], posX, posYNames, FONT, TEXT_COLOR);
      drawText(time, posX, posYtimes, FONT, TEXT_COLOR);
    }
  }

  function drawChart(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    console.log(x, y, width, height);
  }

  function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  function getRandomColor() {
    var colors = []
    for (var i = 0; i < 3; i++) {
      colors.push(randomInteger(0, 255));
    }
    return 'rgb(' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + ')';
  }

  drawCloud();
  drawTitle(CLOUD_TITLE);
  drawCharts();

  /*

  var CLOUD_PROPERTIES = {
    x: 100,
    y: 10,
    width: 420,
    height: 270,
    color: 'white',
    colorShadow: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: 10,
  };

  var TEXT_PROPERTIES = {
    fontSize: '16px',
    fontFamily: 'PT Mono',
    color: '#666666',
    lineHeight: 25,
    title: [
      'Ура вы победили!',
      'Список результатов'
    ]
  };

  var HEIGHT_CHART = 150;
  var WIDTH_COLUMN = 40;
  var INTERVAL_COLUMN = 50;
  var COLOR_COLUMN_MYSELF = 'rgba(255, 0, 0, 1)';

  function drawCloud(properties) {
    ctx.fillStyle = properties.colorShadow;
    var posShadowX = properties.x + properties.shadowOffset;
    var posShadowY = properties.y + properties.shadowOffset
    ctx.fillRect(posShadowX, posShadowY, properties.width, properties.height);
    ctx.fillStyle = properties.color;
    ctx.fillRect(properties.x, properties.y, properties.width, properties.height);
  }

  function drawTitle(properties) {
    var x = properties.x + properties.lineHeight;
    for (var i = 0; i < properties.title.length; i++) {
      var y = properties.y + (properties.lineHeight * (i + 1));
      ctx.font = properties.fontSize + ' ' + properties.fontFamily;
      ctx.fillStyle = properties.color;
      console.log(x, y, properties.fontSize + ' ' + properties.fontFamily);
      ctx.fillText(properties.content[i], x, y);
    }
  }

  function drawPanel(propCloud, propText, names, times) {
    drawCloud(propCloud);
    propText.x = propCloud.x;
    propText.y = propCloud.y;
    drawTitle(propText);
    for (var i = 0; names.length; i++) {
      drawColumn(names[i], times[i], WIDTH_COLUMN, HEIGHT_CHART, COLOR_COLUMN_MYSELF);
      break;
    }
  }

  function drawColumn(name, time, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.font = properties.fontSize + ' ' + properties.fontFamily;
    ctx.fillStyle = properties.color;
    ctx.fillRect(x, y, width, height);
  }

  drawPanel(CLOUD_PROPERTIES, TEXT_PROPERTIES, names, times);

  */
};

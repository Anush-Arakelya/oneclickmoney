
module.exports = {
  'page content'(browser){
    browser
    .url('https://oneclickmoney.ru/')
    .waitForElementVisible('#content-shell')
    .assert.visible('.tablet-header')
    .assert.visible('button.open-menu')
    .assert.containsText('.logo-tablet', 'One Click Money')
    .assert.attributeContains('.logo-tablet', 'href', '/')
    .assert.visible('.opn-eng')
    .assert.attributeContains('.opn-eng', 'href', '#signin')
    .assert.visible('.tablet-header')
    .assert.attributeContains('.opn-eng', 'href', '#signin')
    .assert.containsText('.range-blk-ctc.data-range-am1', 'Сумма займа')
    .assert.containsText('.range-blk ~ .from-range', '500')
    .assert.containsText('.range-blk ~ .to-range', '30000')
    .assert.containsText('.data-range-am2 p', 'Срок')
    .assert.containsText('.data-range-am2 .range-blk ~ .from-range', '6')
    .assert.containsText('.data-range-am2 .range-blk ~ .to-range', '60')
    .assert.containsText('.right-ctc .calc__you-taken-header', 'Вы берёте:')
    .assert.containsText('.right-ctc .calc__currency', '₽')
    .assert.containsText('.right-ctc .calc__you-taken-text', 'на')
    .assert.containsText('.right-ctc .calc__you-taken-day ~ p', 'дней')
    .assert.containsText('.confirmation-ctc input[type=checkbox] ~ label', 'У меня есть промо-код')
    .assert.containsText('button.take-loan-submit', 'Оформить заявку')
    .assert.containsText('.index-calc__esia-btn-text', 'Оформите заявку через госуслуги и мы увеличим сумму займа на 2000')
    .assert.attributeContains('.index-calc__esia-btn-link', 'href', 'https://esia.gosuslugi.ru/')
    .assert.containsText('.open-mw-gl', 'Как получить займ?')
    .assert.containsText('.open-mw-ll', 'Как погасить займ?')
   .end();

   },
  
  'Menu button'(browser){
    browser
    .url('https://oneclickmoney.ru/')
    .waitForElementPresent('.open-menu')
    .pause(1000)
    .click('.open-menu')
    .waitForElementPresent('.logo-menu-tm')
   .end();
   },

 'button "Оформить заявку"'(browser){
    browser
    .url('https://oneclickmoney.ru/')
    .waitForElementVisible('.take-loan-submit')
    .pause(1000)
    .click('.take-loan-submit')
    .assert.title("Регистрация: 1 шаг для получения онлайн-займа в ONECLICKMONEY.RU")
    .end();
  },
  'button "Оформите заявку через госуслуги и мы увеличим сумму займа на 2000"'(browser){
    browser
    .url('https://oneclickmoney.ru/')
    .waitForElementVisible('.index-calc__esia-btn-text')
    .pause(1000)
    .click('.index-calc__esia-btn-text')
    .assert.title("Авторизация")
    .end();
  },
 
'Войти в личный кабинет'(browser){
  browser
  .url('https://oneclickmoney.ru/')
  .waitForElementVisible('.inner-menu-tm')
  .pause(1000)
  .click('.opn-eng')
  .assert.title("Онлайн займы на карту, оформление микрозаймов и экспресс-кредитов от Oneclickmoney")
 .end();
 },

 'Как получить займ?'(browser){
  browser
  .url('https://oneclickmoney.ru/')
  .waitForElementVisible('.inner-menu-tm')
  .pause(1000)
  .click('.open-mw-gl')
  .waitForElementPresent('.title-modal')
 .end();
 },

 'Как погасить займ?'(browser){
  browser
  .url('https://oneclickmoney.ru/')
  .waitForElementVisible('.inner-menu-tm')
  .pause(1000)
  .click('.open-mw-ll')
  .waitForElementPresent('.title-modal')
 .end();
 }
}


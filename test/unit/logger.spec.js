const expect = require('chai').expect;
const sandbox = require('sinon').createSandbox();
const logger = require('../../src/helpers/logger');

describe('Logger', () => {

  beforeEach(() => {
    this.debugStub = sandbox.stub(console, 'debug');
    this.infoStub = sandbox.stub(console, 'info');
    this.warnStub = sandbox.stub(console, 'warn');
    this.errorStub = sandbox.stub(console, 'error');
    this.writeStub = sandbox.stub(process.stdout, 'write');
  });

  it('trace', () => {
    logger.setLevel('TRACE');
    logger.trace('demo');
    expect(this.writeStub.callCount).equals(1);
    expect(this.debugStub.callCount).equals(1);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.debug('demo');
    expect(this.writeStub.callCount).equals(2);
    expect(this.debugStub.callCount).equals(2);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.info('demo');
    expect(this.writeStub.callCount).equals(3);
    expect(this.debugStub.callCount).equals(2);
    expect(this.infoStub.callCount).equals(1);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.warn('demo');
    expect(this.writeStub.callCount).equals(4);
    expect(this.debugStub.callCount).equals(2);
    expect(this.infoStub.callCount).equals(1);
    expect(this.warnStub.callCount).equals(1);
    expect(this.errorStub.callCount).equals(0);
    logger.error('demo');
    expect(this.writeStub.callCount).equals(5);
    expect(this.debugStub.callCount).equals(2);
    expect(this.infoStub.callCount).equals(1);
    expect(this.warnStub.callCount).equals(1);
    expect(this.errorStub.callCount).equals(1);
  });

  it('debug', () => {
    logger.setLevel('DEBUG');
    logger.trace('demo');
    expect(this.writeStub.callCount).equals(0);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.debug('demo');
    expect(this.writeStub.callCount).equals(1);
    expect(this.debugStub.callCount).equals(1);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.info('demo');
    expect(this.writeStub.callCount).equals(2);
    expect(this.debugStub.callCount).equals(1);
    expect(this.infoStub.callCount).equals(1);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.warn('demo');
    expect(this.writeStub.callCount).equals(3);
    expect(this.debugStub.callCount).equals(1);
    expect(this.infoStub.callCount).equals(1);
    expect(this.warnStub.callCount).equals(1);
    expect(this.errorStub.callCount).equals(0);
    logger.error('demo');
    expect(this.writeStub.callCount).equals(4);
    expect(this.debugStub.callCount).equals(1);
    expect(this.infoStub.callCount).equals(1);
    expect(this.warnStub.callCount).equals(1);
    expect(this.errorStub.callCount).equals(1);
  });

  it('info', () => {
    logger.setLevel('INFO');
    logger.trace('demo');
    expect(this.writeStub.callCount).equals(0);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.debug('demo');
    expect(this.writeStub.callCount).equals(0);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.info('demo');
    expect(this.writeStub.callCount).equals(1);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(1);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.warn('demo');
    expect(this.writeStub.callCount).equals(2);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(1);
    expect(this.warnStub.callCount).equals(1);
    expect(this.errorStub.callCount).equals(0);
    logger.error('demo');
    expect(this.writeStub.callCount).equals(3);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(1);
    expect(this.warnStub.callCount).equals(1);
    expect(this.errorStub.callCount).equals(1);
  });

  it('warn', () => {
    logger.setLevel('WARN');
    logger.trace('demo');
    expect(this.writeStub.callCount).equals(0);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.debug('demo');
    expect(this.writeStub.callCount).equals(0);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.info('demo');
    expect(this.writeStub.callCount).equals(0);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.warn('demo');
    expect(this.writeStub.callCount).equals(1);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(1);
    expect(this.errorStub.callCount).equals(0);
    logger.error('demo');
    expect(this.writeStub.callCount).equals(2);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(1);
    expect(this.errorStub.callCount).equals(1);
  });

  it('error', () => {
    logger.setLevel('ERROR');
    logger.trace('demo');
    expect(this.writeStub.callCount).equals(0);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.debug('demo');
    expect(this.writeStub.callCount).equals(0);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.info('demo');
    expect(this.writeStub.callCount).equals(0);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.warn('demo');
    expect(this.writeStub.callCount).equals(0);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(0);
    logger.error('demo');
    expect(this.writeStub.callCount).equals(1);
    expect(this.debugStub.callCount).equals(0);
    expect(this.infoStub.callCount).equals(0);
    expect(this.warnStub.callCount).equals(0);
    expect(this.errorStub.callCount).equals(1);
  });

  afterEach(() => {
    sandbox.restore();
  });

  after(() => {
    logger.setLevel('INFO');
  });

});
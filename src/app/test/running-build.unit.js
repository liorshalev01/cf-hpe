/* eslint-env mocha */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */
import './config.env';
import { expect } from 'chai';
import RunningBuild from 'app/running-build';
import RunningBuildStep from 'app/running-build-step';

describe('RunningBuild', function () {
  this.slow(2000);
  this.timeout(30000);

  it('Should receive running builds', function (done) {
    RunningBuild
      .runningBuilds()
      .take(1)
      .doOnNext(buildLogRef => {
        done();
      })
      .doOnError(error => done(error))
      .subscribe();
  });

  it('Should receive running build steps', function (done) {
    RunningBuild
      .runningBuilds()
      .take(1)
      .flatMap(runningBuildSteps => runningBuildSteps)
      .doOnNext(runningBuildStep => {
        
      })
      .doOnError(error => done(error))
      .subscribe();
  });
});

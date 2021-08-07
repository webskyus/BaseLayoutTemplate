'use strict';
const gulp = tars.packages.gulp;
const gutil = tars.packages.gutil;
const runSequence = tars.packages.runSequence.use(gulp);
const critical = require('critical');
const fs = require('fs')



/**
 * Build release version
 */
module.exports = () => {
    return gulp.task(
        'main:build',
        gulp.series('main:build-dev', (done) => {
            runSequence(
                ['html:modify-html', 'images:minify-images'],
                'main:create-build',
                ['css:compress-css'],
                // 'service:zip-build',
                () => {
                    console.log(
                        gutil.colors.black.bold(
                            '\n------------------------------------------------------------',
                        ),
                    );
                    tars.say(gutil.colors.green.bold(' Build has been created successfully!'));

                    if (tars.config.useBuildVersioning) {
                        tars.say(gutil.colors.white.bold('Build version is: ', tars.options.build.version));
                    }
                    console.log(
                        gutil.colors.black.bold(
                            '------------------------------------------------------------\n',
                        ),
                    );
										done();
									// change index html files after all files generated 
									setTimeout(() => {
										const pagesNameArr = []
										const crList = {
											'.general-btn': ['display', 'font-size', 'height', 'width', 'max-height', 'min-height', 'max-width', 'min-width', 'line-height', 'padding', 'text-align', 'border'],
											'.general-btn.general-btn--outline': ['display', 'font-size', 'height', 'width', 'max-height', 'min-height', 'max-width', 'min-width', 'line-height', 'padding', 'text-align', 'border'],
											'.general-btn.general-btn--primary': ['display', 'font-size', 'height', 'width', 'max-height', 'min-height', 'max-width', 'min-width', 'line-height', 'padding', 'text-align', 'border'],
											'body input::-webkit-input-placeholder': ['display', 'font-size', 'height', 'width', 'max-height', 'min-height', 'max-width', 'min-width', 'line-height', 'padding', 'text-align', 'border'],
											'body input::-moz-placeholder': ['display', 'font-size', 'height', 'width', 'max-height', 'min-height', 'max-width', 'min-width', 'line-height', 'padding', 'text-align', 'border'],
											'body': ['display', 'font-size', 'height', 'width', 'max-height', 'min-height', 'max-width', 'min-width', 'line-height', 'padding', 'text-align', 'border'],
											'body input:-ms-input-placeholder': ['display', 'font-size', 'height', 'width', 'max-height', 'min-height', 'max-width', 'min-width', 'line-height', 'padding', 'text-align', 'border'],
											'body input::-ms-input-placeholder': ['display', 'font-size', 'height', 'width', 'max-height', 'min-height', 'max-width', 'min-width', 'line-height', 'padding', 'text-align', 'border'],
											'body input:-ms-input-placeholder': ['display', 'font-size', 'height', 'width', 'max-height', 'min-height', 'max-width', 'min-width', 'line-height', 'padding', 'text-align', 'border'],

										}
										const baseDir = `builds/build${tars.options.build.version}`

										fs.readdir(baseDir, (err, files) => {
											files.forEach(file => {
												const regexp = /\.[a-z]*/
												const regexpName = /^[a-z, \d, -]*/
												const htmlExt = '.html'
												const exceptionName1 = '_template.html'
												const exceptionName2 = 'links.html'

												if (file.match(regexp) == htmlExt && file !== exceptionName1 && file !== exceptionName2) {
													pagesNameArr.push(file.match(regexpName)[0])
													console.log(pagesNameArr)
												}
											})

											// change html files 
											function changeHTML(page) {
												let htmlFile = `${baseDir}/${page}.html`
												let criticalCssFile = `${baseDir}/static/css/separate-css/${page}-critical.css`
												let criticalCss =  fs.readFileSync(criticalCssFile)
												return fs.readFile(htmlFile, 'utf-8', function (err, data) {
													if (err) {
														return console.log(err)
													}

													let result = data.replace('<!-- inline critical css-->', `<style>${criticalCss}</style>`)
													
													fs.writeFile(`${baseDir}/${page}.html`, result, (err) => {
														if (err) return console.log(err)
													})
												})
											}

											// generate critical style for first section after generate all files 
											pagesNameArr.forEach(async page => {
												await critical.generate({
													base: `builds/build${tars.options.build.version}/`,
													src: `${page}.html`,
													css: `static/css/main${tars.options.build.hash}.min.css`,
													width: 1100,
													height: 375,
													minify: true,
													target: {
														css: `static/css/separate-css/${page}-critical.css`,
														//uncritical: `css/${page}-async.css`
													},
													include: [
														''
													],
													ignore: {
														atrule: ['@font-face', ':root', '@keyframes', '@-webkit-keyframes'],
														rule: [
															".mobile-header-geo__wrapper::after",
														],
														decl(node, value) {
															let { selector } = node.parent;

															if (!(selector in crList)) {
																return false;
															}

															return !crList[selector].includes(node.prop);
														}
													},
												})
											})
											
											pagesNameArr.forEach(async page => {
												await setTimeout(() => {
													changeHTML(page)
												}, 2000);
											})

										})


									}, 10000);

                },
						);



        }),
    );
};

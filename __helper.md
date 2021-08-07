// gulp commands
-- npm install | install project or npm update 
-- npm i -g tars-cli | install builder 
-- tars dev / tars dev --lr / etc view in terminal | run project 
-- tars build / tars build --release / etc view in terminal | build project or minify files 
-- tars add-page 'pagename' | created new page 
-- tars add-component | create new component 
-- for git extension https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens



// pug 
-- [extention] if you view error in terminal, turn on whitespace+ 
	 Toggle and check tab and space https://marketplace.visualstudio.com/items?itemName=davidhouchin.whitespace-plus
-- [extention] before html tag TAB after SPACE, use plugin beautify pug 
-- if need convert html to pug, find in google convert site
-- component add in page | include ../components/head/head.pug
-- +head(head.defaults) | for page title, you can add new name (components/head/data) and use it +head(head.profile)
-- example button	
		-- button.primary-button(data-js-attr)
				| some text for this button 
				span.button-icon 
					img(src='' alt='')


// sass styleguide 
-- sass mixin 
-- position 
-- display / width / height / margin / padding / float 
-- font 
-- color / background / border / box-shadow / etc 
-- animation / transition / transform
-- will-change / etc ... 
-- response mixins 


// sass 
-- [extention] view _vars.sass variable global https://marketplace.visualstudio.com/items?itemName=Atishay-Jain.All-Autocomplete 
-- url('../img/general/icon...')
-- if you need svg inline, work with img/svg folder 
-- use fonts mixin and etc mixins example	
		-- +in_r_14
		-- color: $acceptor
		-- +bx_shadow_name


// js styleguide
-- add script name in Navigation menu 
-- comment start and end scrit in main.js file 
-- api js | only es6+ and validation only jquery, check change http://youmightnotneedjquery.com/
-- for beautify code use ESLint vscode ext https://goo-gl.me/RKhGZ
-- init custom scrollbar add data attr box data-js-simplebar-box


// img and iframe google chrome lazy load 
-- img lazy load new 
		-- img(src='image.png' loading='lazy' alt='…' width='200' height='200')
-- frame lazy load, aria-label and role for fake load frame
		-- iframe(src='https://example.com' loading='lazy')
-- multiappend img 
		-- picture
				source(media='(max-width: 460px)' srcset='img/sg-logo-mobile.webp')
				source(media='(max-width: 460px)' srcset='img/sg-logo-mobile.png')
				source(type='image/webp' srcset='img/sg-logo.webp')
				img(src='img/sg-logo.png' width='400' height='42' loading="lazy" alt='')


// svg inline tars 
!= pugHelpers.Icon.call(locals, {iconName: 'iconName', className: 'customClass', iconWidth: '25', iconHeight: '25'})

// build 
-- when project have > 20 page, or critical css show error, change setTimeout time 	inner .\tars\tasks\main\build.js
		--  change 2000 -> 10000
		-- 	change 10000 -> 50000
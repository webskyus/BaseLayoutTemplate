var smartgrid = require('smart-grid');
 


/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 24, /* number of grid columns */
		offset: '33px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1366px', /* max-width оn very large screen */
				fields: '33px' /* side fields */,
    },
    breakPoints: {
        xl: {
            width: '1300px', /* -> @media (max-width: 1300px) */
        },
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px'
        },
        xs: {
            width: '639px'
        },
        xs_design: {
            width: '375px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};
 

smartgrid();
smartgrid('./markup/static/scss', settings);
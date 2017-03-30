/**
 * Created by Liu wei on 2017/3/30.
 */

var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require("path");
//var env = require('yargs').argv.mode;

var lib_dir = __dirname + '/public/libraries',
    node_dir = __dirname + '/node_modules',
    bower_dir = __dirname + '/bower_components',
    plugins_dir = __dirname + '/public/plugins';

var config = {

    resolve: {
        alias: {
            react: node_dir + '/react',
            "react-dom": node_dir + '/react-dom',
            jquery: node_dir + '/jquery/dist/jquery.min.js',
            "velocity-animate": node_dir + '/velocity-animate',
            //jqueryUi: plugins_dir + '/jQueryUI/jquery-ui.min.js',
            //bootstrap: plugins_dir + '/bootstrap/js/bootstrap.min.js',
            //eve: node_dir + '/raphael/eve/eve.js',
            //raphael: node_dir + '/webpack-raphael/raphael.js',
            //morris: plugins_dir + '/morris/morris.js',
            //sparkline: plugins_dir + '/sparkline/jquery.sparkline.min.js',
            //jvectormap: plugins_dir + '/jvectormap/jquery-jvectormap-1.2.2.min.js',
            //jvectormapWorld: plugins_dir + '/jvectormap/jquery-jvectormap-world-mill-en.js',
            //knob: plugins_dir + '/knob/jquery.knob.js',
            //moment: plugins_dir + '/moment/moment.js',
            //daterangepicker: plugins_dir + '/daterangepicker/daterangepicker.js',
            //bootstrapDatepicker: plugins_dir + '/datepicker/bootstrap-datepicker.js',
            //bootstrapWysihtml5: plugins_dir + '/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js',
            //slimscroll: plugins_dir + '/slimScroll/jquery.slimscroll.min.js',
            //fastclick: plugins_dir + '/fastclick/fastclick.min.js',
        }
    },

    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            '$': "jquery",
            'window.jQuery': "jquery",
            'jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        //new webpack.optimize.CommonsChunkPlugin('vendors', 'dist/js/vendors.js', Infinity),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new webpack.optimize.DedupePlugin(),
        //new webpack.optimize.OccurenceOrderPlugin()

    ],
    devtool: 'cheap-module-source-map',
    //entry: {
        //dashboardV1: './src/pages/dashboardV1/js/dashboard',
        //widgets: ['./src/pages/widgets-page/js/widgets-page'],
        //timeline: './src/pages/timeline-page/js/timeline-page',
        //generalUIElements: './src/pages/ui-elements-page/general/js/page-ui-elements',

        //vendors: ['react', 'reactDom', 'jquery', 'velocity', 'jqueryUi', 'bootstrap', 'moment', 'bootstrapDatepicker'],
        //chartVendors: ['jquery', 'raphael', 'morris', 'jvectormap', 'jvectormapWorld'],
    //},
    entry:path.resolve(__dirname,'src/index.js'),

    output: {
        path: path.join(__dirname, "public"),
        filename: "dist/js/[name].bundle.js",
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    module: {
        noParse: [
            //new RegExp(node_dir + '/react'),
            new RegExp(lib_dir + './react-dom.js')
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
                query: {
                    presets: ['react']
                },
                include: path.join(__dirname, 'public'),
                exclude: /(node_modules|bower_components)/

            },
            {
                loader: 'babel-loader', //'jsx-loader'
                query: {
                    presets: ['react', 'es2015']
                },
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/
            },
        ]
    }
};


module.exports = config;

'use strict';

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
            "velocity-animate": node_dir + '/velocity-animate'
        }
    },

    plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        '$': "jquery",
        'window.jQuery': "jquery",
        'jQuery': 'jquery',
        'window.$': 'jquery'
    }),
    //new webpack.optimize.CommonsChunkPlugin('vendors', 'dist/js/vendors.js', Infinity),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        }
    }), new webpack.optimize.UglifyJsPlugin({
        minimize: true
    }), new webpack.optimize.DedupePlugin()],
    //devtool: 'cheap-module-source-map',
    //entry: {
    //dashboardV1: './src/pages/dashboardV1/js/dashboard',
    //widgets: ['./src/pages/widgets-page/js/widgets-page'],
    //timeline: './src/pages/timeline-page/js/timeline-page',
    //generalUIElements: './src/pages/ui-elements-page/general/js/page-ui-elements',

    //vendors: ['react', 'reactDom', 'jquery', 'velocity', 'jqueryUi', 'bootstrap', 'moment', 'bootstrapDatepicker'],
    //chartVendors: ['jquery', 'raphael', 'morris', 'jvectormap', 'jvectormapWorld'],
    //},
    entry: path.resolve(__dirname, 'src/index.js'),

    output: {
        path: path.join(__dirname, "public"),
        filename: "dist/js/[name].bundle.js",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        noParse: [
        //new RegExp(node_dir + '/react'),
        new RegExp(lib_dir + './react-dom.js')],
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.jsx?$/,
            loader: 'babel-loader', //'jsx-loader'
            query: {
                presets: ['react', 'es2015']
            },
            include: path.join(__dirname, 'src'),
            exclude: /(node_modules|bower_components)/
        }]
    }
};

module.exports = config;

//# sourceMappingURL=webpack.config-compiled.js.map
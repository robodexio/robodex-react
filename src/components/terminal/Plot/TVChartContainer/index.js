import * as React from 'react';
import './index.css';
import { widget } from './charting_library/charting_library.min';

function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export class TVChartContainer extends React.PureComponent {
	static defaultProps = {
		symbol: 'AAPL',
		interval: 'D',
		containerId: 'tv_chart_container',
		datafeedUrl: 'https://demo_feed.tradingview.com',
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
	};

	tvWidget = null;

	componentDidMount() {
		const widgetOptions = {
			symbol: this.props.symbol,
			// BEWARE: no trailing slash is expected in feed URL
			datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this.props.datafeedUrl),
			interval: this.props.interval,
			container_id: this.props.containerId,
			library_path: this.props.libraryPath,

			locale: getLanguageFromURL() || 'en',
			disabled_features: ['use_localstorage_for_settings', 'left_toolbar', 'control_bar', 'timeframes_toolbar', 'main_series_scale_menu', 'remove_library_container_border', 'header_widget', 'context_menus', 'border_around_the_chart', 'remove_library_container_border'],
      enabled_features: [],
      
			charts_storage_url: this.props.chartsStorageUrl,
			charts_storage_api_version: this.props.chartsStorageApiVersion,
			client_id: this.props.clientId,
			user_id: this.props.userId,
			fullscreen: this.props.fullscreen,
			autosize: this.props.autosize,
			studies_overrides: this.props.studiesOverrides,
			overrides: {
				'paneProperties.background': '#333945',
				'scalesProperties.textColor': '#747E8D',

				'mainSeriesProperties.candleStyle.upColor': '#01D25B',
				'mainSeriesProperties.candleStyle.downColor': '#FE4640',
				'mainSeriesProperties.candleStyle.wickUpColor': '#01D25B',
        'mainSeriesProperties.candleStyle.wickDownColor': '#FE4640',
        'mainSeriesProperties.candleStyle.borderUpColor': '#01D25B',
        'mainSeriesProperties.candleStyle.borderDownColor': '#FE4640',
				
				"paneProperties.vertGridProperties.color": "#454545",
        "paneProperties.horzGridProperties.color": "#454545",
        
				/*
				"paneProperties.vertGridProperties.color": "#454545",
				"paneProperties.horzGridProperties.color": "#454545",
				"symbolWatermarkProperties.transparency": 90,
				"scalesProperties.textColor" : "#AAA"
				*/
      },
      loading_screen: { 
        backgroundColor: '#333945',
        foregroundColor: '#333945'
      },
      theme: 'Dark'
		};

		const tvWidget = new widget(widgetOptions);
		this.tvWidget = tvWidget;

		tvWidget.onChartReady(() => {
			const button = tvWidget.createButton()
				.attr('title', 'Click to show a notification popup')
				.addClass('apply-common-tooltip')
				.on('click', () => tvWidget.showNoticeDialog({
					title: 'Notification',
					body: 'TradingView Charting Library API works correctly',
					callback: () => {
						console.log('Noticed!');
					},
				}));

			button[0].innerHTML = 'Check API';
		});
	}

	componentWillUnmount() {
		if (this.tvWidget !== null) {
			this.tvWidget.remove();
			this.tvWidget = null;
		}
	}

	render() {
		return (
			<div
				id={ this.props.containerId }
				className={ 'TVChartContainer' }
			/>
		);
	}
}

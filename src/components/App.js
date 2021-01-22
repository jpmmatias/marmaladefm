import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Featuredmix from './Featuredmix';
import Header from './Header';
import Home from './Home';
import About from './About';
import Archive from './Archive';
import mixes from '../data/mixes';

class App extends Component {
	//https://api.mixcloud.com/

	state = {
		playing: false,
		currentmix: '',
		mix: null,
		mixIds: mixes,
		mixes: [],
	};
	actions = {
		togglePlay: () => {
			this.widget.togglePlay();
		},

		playMix: (mixname) => {
			if (mixname === this.state.currentmix) {
				return (
					this.widget.togglePlay(),
					this.setState((prevState, props) => ({
						playing: !prevState.playing,
					}))
				);
			}
			this.widget.load(mixname, true);
			this.setState((prevState, props) => ({
				currentmix: mixname,
				playing: !prevState.playing,
			}));
		},
	};

	fetchMixes = async () => {
		const { mixIds } = this.state;
		mixIds.map(async (id) => {
			try {
				const res = await fetch(`https://api.mixcloud.com${id}`);
				const data = await res.json();
				this.setState((prev, props) => ({
					mixes: [...prev.mixes, data],
				}));
			} catch (err) {
				console.log(err);
			}
		});
	};

	mountAudio = async () => {
		this.widget = Mixcloud.PlayerWidget(this.player);
		await this.widget.ready;
		this.widget.events.pause.on(() =>
			this.setState({
				playing: false,
			})
		);
		this.widget.events.play.on(() =>
			this.setState({
				playing: true,
			})
		);
	};

	componentDidMount() {
		this.mountAudio();
		this.fetchMixes();
	}

	render() {
		const [firstMix = {}] = this.state.mixes;
		return (
			<Router>
				<div>
					<div className='flex-l justify-end'>
						{/* {FeaturedMix} */}
						<Featuredmix
							{...this.state}
							{...this.actions}
							{...this.firstMix}
							id={firstMix.key}
							name={firstMix.name}
							pictures={firstMix.pictures}
						/>
						<div className='w-50-l relative z-1'>
							{/* {Header} */}
							<Header />
							{/* Router page */}
							<Route
								exact
								path='/'
								render={() => <Home {...this.state} {...this.actions} />}
							/>
							<Route
								path='/archieve'
								render={() => <Archive {...this.state} {...this.actions} />}
							/>
							<Route
								path='/about'
								render={() => <About {...this.state} {...this.actions} />}
							/>
						</div>
						{/* Audio Player */}
						<iframe
							title='Player Mix'
							width='100%'
							height='60'
							src='https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fmaxvibes%2Fback-in-brazil-02%2F'
							frameBorder='0'
							className='db fixed bottom-0 z-5'
							ref={(player) => (this.player = player)}
						></iframe>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;

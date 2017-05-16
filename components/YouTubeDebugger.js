import React from 'react'

class YouTubeDebugger extends React.Component{
	constructor() {
		super()

		this.state = {
			  errors: [],
			  user: null,
			  settings: {
			    bitrate: 8,
			    video: {
			      resolution: '1080p'
			    }
			}
		}

	}

	updateBitrate() {
		this.setState({
			settings: Object.assign({}, this.state.settings, {
				bitrate: 12,
			})
		})
	}

	updateResolution() {
		this.setState({
			settings: Object.assign({}, this.state.settings, {
				video: Object.assign({}, this.state.settings.video, {
					resolution: '720p'
				})
			})
		})
	}


	render() {
		return(
			<div>
				<button className='bitrate' onClick={this.updateBitrate.bind(this)}>Update Bitrate</button>
				<button className='resolution' onClick={this.updateResolution.bind(this)}>Update Resolution</button>
			</div>
		)
	}
}

export default YouTubeDebugger
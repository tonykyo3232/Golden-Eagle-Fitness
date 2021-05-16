/*
	Workout Program screen
	Will process the workout and start the countdown
*/
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Vibration } from 'react-native';
import { Audio } from 'expo-av';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

class ProgTimer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			label: props.route.params.selectedLabel,
			workout: '',
			workout_steps: '',
			prepared: false,
			pre_step_duration: 5,
			curr_step: '',
			curr_step_duration: '',
			next_step: '',
			next_step_duration: '',
			index: 0,
			finished: false,
			hasVibrated: false,
			sound: ''
		}
	}

	async componentDidMount() {
		// fetch the data from the website
		const responseWorkout = await fetch(`https://gef-db.herokuapp.com/workout/${this.state.label}`);

		// convert to Json format data
		const fetch_workout = await responseWorkout.json();

		// save the workouts
		this.setState({ workout: fetch_workout });

		/*
			save the program steps in a 2D array variable called 'steps'
		*/
		let steps = 0;
		{
			fetch_workout.map((entry) => {
				// insert the first step in 2D array
				{
					entry.steps.map((step) => {
						if (steps == 0) {
							steps = [
								[step[0], step[1]]
							];
						}
						// insert the rest of steps in 2D array
						else {
							steps.push([step[0], step[1]]);
						}
					})
				}
			})
		}

		// save the workout steps
		this.setState({ workout_steps: steps })

		// By default, save the workout steps curr_step and curr_duration for the first element
		this.setState({ curr_step: steps[0][0], curr_step_duration: steps[0][1] })

		// By default, save the workout steps next_step and next_duration for the second element
		this.setState({ next_step: steps[1][0], next_step_duration: steps[1][1] })

		// update index
		this.setState({ index: 1 });

		console.log("Done fetching...")

		// set up the sound
		let sound_accomplished = await Audio.Sound.createAsync(
			require('../../assets/notification.mp3'), { shouldPlay: true }
		);
		this.setState({ sound: sound_accomplished });

		// call the decrement function
		this.interval = setInterval(this.dec, 1000)
	}

	// Unmount the timer
	componentWillUnmount() {
		clearInterval(this.interval)
	}

	/*
		Decrement function
		Will be in charge of decrementing the step duration
	*/
	dec = () => {
		// before starting the workout, have the few seconds countdown to let the user get ready
		if (this.state.prepared == false) {
			if (this.state.pre_step_duration != 0) {
				this.setState(prevState => ({
					pre_step_duration: prevState.pre_step_duration - 1,
				}))
			}
			else {
				this.setState({ prepared: true });
			}
		}
		// start the workout timing
		else {
			if (this.state.finished == false) {
				console.log('decrementing...');
				// case: if current step's countdown is finished and there exists the next step
				// update curr_step, curr_step_duration, and index
				if (this.state.curr_step_duration == 0) {
					this.setState(prevState => ({
						curr_step: this.state.workout_steps[this.state.index][0],
						curr_step_duration: this.state.workout_steps[this.state.index][1],
						index: prevState.index + 1,
					}))

					// update the info for next next step if exists
					if (this.state.workout_steps[this.state.index] != null) {
						this.setState(prevState => ({
							next_step: this.state.workout_steps[this.state.index][0],
							next_step_duration: this.state.workout_steps[this.state.index][1],
						}))
					}
					// when current step is the last step, assign null to these variables
					else {
						this.setState(prevState => ({
							next_step: null,
							next_step_duration: null
						}))
					}

					Vibration.vibrate()
				}
				// case: during the each step's countdown
				else {
					this.setState(prevState => ({
						curr_step_duration: prevState.curr_step_duration - 1,
					}))
				}

				console.log("=== DEBUG Message ===")
				console.log("Current step: " + this.state.curr_step)
				console.log("Current Duration: " + this.state.curr_step_duration)
				console.log("next step's index: " + this.state.index)
				console.log("=====================")

				// If the last step of the workout is completed, set the value of 'finished' to true
				if (this.state.curr_step_duration == 0 && this.state.workout_steps[this.state.index] == null) {
					this.setState({
						finished: true,
					})
				}
			}
			else {
				if (this.state.hasVibrated == false) {
					console.log("Workout Completed.")
					Vibration.vibrate()
					this.setState({
						hasVibrated: true,
					})
				}

				// console.log("Workout Completed.")
			}
		}
	}

	render() {
		if (this.state.prepared == false) {
			return (
				<View style={styles.readyContainer}>
					<Text style={styles.readyText}>Get Ready!</Text>
					<Text style={styles.readyText}>{this.state.pre_step_duration}</Text>
				</View>
			)
		}
		else {
			if (this.state.finished == false) {
				return (
					<View style={styles.workoutContainer}>
						<Text style={styles.workoutText}>{this.state.curr_step}</Text>
						<Text style={styles.workoutText}>{this.state.curr_step_duration}</Text>
						{this.state.next_step == null ? <Text style={styles.workoutText}>Last Step!</Text> : <Text style={styles.nextStepText}>Next Step: {this.state.next_step} ({this.state.next_step_duration} Secs)</Text>}
					</View>
				)
			}
			else {
				return (
					<>
						<Text>Workout Completed!</Text>
					</>
				)
			}
		}
	}
}

const styles = StyleSheet.create({
	readyText: {
		fontSize: responsiveFontSize(5),
		fontWeight: 'bold'
	},
	readyContainer: {
		flex: 1,
		backgroundColor: '#385057',
		alignItems: 'center',
		justifyContent: 'center'
	},
	workoutText: {
		fontSize: responsiveFontSize(6),
		color: 'white',
	},
	nextStepText: {
		fontSize: responsiveFontSize(3),
	},
	workoutContainer: {
		flex: 1,
		backgroundColor: '#385057',
		alignItems: 'center',
		justifyContent:'center'
	},
	titleContainer: {
		marginTop: responsiveFontSize(5)
	}
});

export default ProgTimer;
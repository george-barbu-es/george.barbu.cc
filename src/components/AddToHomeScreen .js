import AddToHomeScreen from 'gatsby-plugin-pwainstall'

export default (props) => {
	return (
		<div>
			<AddToHomeScreen suspend='2' acceptedUri='/' dismmissedUri='/'>
				Install Barbu George CV
			</AddToHomeScreen>
		</div>
	)
}
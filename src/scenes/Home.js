import React from "react";
import { View, Text,  StyleSheet, TouchableOpacity} from "react-native";
import {   Link} from './../Routing';
import { connect } from "react-redux";
class Home extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <Link to={'/one'} component={TouchableOpacity} >
                    <Text style={styles.appIntro}>
                        To get started, edit src/App.js and save to reload.
                    </Text>
                </Link>
            </View> 
        )
    }
}
const mapStateToProps = state => ({
    example: state.example
});
export default connect(mapStateToProps)(Home);
const styles = StyleSheet.create({
    app: {
        flex: 1
    },
    appHeader: {
        flex: 1,
        backgroundColor: "#222",
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    headerImage: {
        width: 200,
        height: 200,
        flex: 3
    },
    appTitle: {
        flex: 1,
        fontSize: 16,
        color: "white"
    },
    appSubtitle: {
        color: "white"
    },
    appIntro: {
        flex: 3,
        fontSize: 30,
        textAlign: "center"
    }
});

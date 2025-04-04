import {StyleSheet, Text, View, StatusBar, SafeAreaView, Image, Button, Alert} from 'react-native';
import {StatusBar as StatusBarExpo} from 'expo-status-bar';
import styled from 'styled-components/native'
import {useState} from "react";

//ex1
// export default function App() {
//     return (
//         <View>
//             <Text style={styles.header}>React</Text>
//             <StatusBar style="auto"/>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     header: {
//         marginTop: 45,
//         color: 'white',
//         backgroundColor: 'gray',
//         fontSize: 24,
//         textAlign: 'center',
//         borderRadius: 10,
//         marginHorizontal: 20,
//     }
// });

//ex2
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>ReactNative!!!</Text>
//             <Text style={styles.subHeader}>React</Text>
//             <StatusBar style="auto"/>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         backgroundColor: '#386b8c',
//         flex: 1,
//     },
//     header: {
//         backgroundColor: 'gray',
//     },
//     subHeader: {
//         color: 'red',
//     },
// });
//ex3
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>ReactNative!!!</Text>
//             <Text style={styles.header}>ReactNative!!!</Text>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         backgroundColor: '#386b8c',
//         flex: 1,
//     },
//     header: {
//         // width: 50,
//         width: '30%',
//         padding: 10,
//         backgroundColor: 'gray',
//     },
// });
//ex4
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <StatusBar style="auto"/>
//             <View style={styles.topView}>
//                 <Text style={styles.text}>ReactNative!!!</Text>
//             </View>
//             <View style={styles.bottomView}>
//                 <Text style={styles.text}>ReactNative!!!</Text>
//             </View>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // flexDirection: 'row'
//     },
//     text: {
//         backgroundColor: 'red',
//         // width: 50,
//         width: '30%',
//         padding: 10,
//     },
//     topView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'yellow',
//     },
//     bottomView: {
//         flex: 1,
//         backgroundColor: 'blue'
//     },
// });


//ex5
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text>ReactNative!!!</Text>
//             {/*<StatusBar backgroundColor="red" barStyle="light-content"/>*/}
//             {/*<StatusBar backgroundColor="#6200EE" barStyle="dark-content"/>*/}
//             {/*<StatusBar backgroundColor="rgba(0,0,0,0.5)" barStyle="dark-content"/>*/}
//             <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0.3)" barStyle="dark-content"/>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: '#386b8c',
//         alignItems: 'flex-end',
//         justifyContent: 'flex-end',
//     },
// });

//ex6
// export default function App() {
//     return (
//         <SafeAreaView style={styles.container}>
//             <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0.3)" barStyle="dark-content"/>
//             <View style={styles.content}>
//                 <Text>ReactNative!!!</Text>
//             </View>
//
//         </SafeAreaView>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#386b8c',
//     },
//     content: {
//         marginTop: StatusBar.currentHeight || 0,
//     }
// });

//ex7
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <StatusBarExpo hidden={false}/>
//             <Text>ReactNative!!!</Text>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: '#386b8c',
//     },
// });

//ex8
// const Container = styled.View`
//     flex: 1;
//     justify-content: center;
//     align-items: center;
//     background-color: #f0f0f0;
// `;
// const Title = styled.Text`
//     font-size: 24px;
//     color: #333;
// `;
// export default function App() {
//     return (
//         <Container>
//             <Title>Hello World</Title>
//         </Container>
//     );
// }

//ex9
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>React native Image</Text>
//             <Image
//                 style={styles.image}
//                 source={require('./assets/adaptive-icon.png')}
//             />
//             <Image
//                 style={styles.image}
//                 source={{uri: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'}}
//                 resizeMode='cover'//cover stretch repeat contain
//             />
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ba9e9e'
//     },
//     title: {
//         fontSize: 24,
//         color: '#333',
//         marginBottom: 20,
//     },
//     image: {
//         width: 200,
//         height: 200,
//     }
// })

//10
// export default function App() {
//     const [isLight, setIsLight] = useState(true);
//     return (
//         <View style={{flex: 1, backgroundColor: isLight ? '#fff' : '#000'}}>
//             <View style={{marginTop: 100}}>
//                 <Button
//                     title={"Put me"}
//                     onPress={() => {
//                         console.log('CLICK!!!');
//                         setIsLight((prev) => !prev)
//                     }}
//                 />
//             </View>
//             <StatusBar
//                 barStyle={isLight ? "dark-content" : "light-content"}
//                 translucent={true}
//                 backgroundColor="rgba(0,0,0,0.5)"
//             />
//         </View>
//     )
// }

//11

export default function App() {
    const handlePress = () => {
        Alert.alert('Кнопка нажата!');
    };
    return (
       <View style={styles.container}>

           <View style={styles.container_Main}>

              <Text style={styles.text}>Rembo</Text>
                 <Text style={styles.text_1}>Last Blaod</Text>
               <View style={styles.button}>
                   <Button title="Нажми меня" onPress={handlePress} />
               </View>

           </View>
       </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f2f2f2',
    },
   container_Main: {
        top:-280,
        width: 370,
        height: 70,
       borderRadius: 8,
       backgroundColor:'white',

   },
    text: {
        left:70,
        top:10,
    },
    text_1: {
        color:'gray',
        fontSize: 12,
        left:70,
        top:13,
    },
button: {
    flex: 1,
    top:-20,
    left:118,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
}
})

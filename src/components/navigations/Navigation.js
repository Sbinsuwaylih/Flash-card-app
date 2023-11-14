import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore'; import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView

} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "../styles/naviations";

import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import NotesScreen from "../screens/NotesScreen";
import SettingsScreen from "../screens/SettingsScreen";



const homeName = "Home";
const notesName = "Quiz";
const settingsScreen = "Create Question";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <NavigationContainer style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Weclome" component={Weclome} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

function Weclome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text
        style={{
          margin: 10,
          marginBottom: 45,
          textAlign: "center",
          justifyContent: "space-between",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        welcome to the flash card app please choose the category you want to be
        asked from
      </Text>

      <TouchableOpacity
        title="General Knowlege"
        style={styles.categoryButton}
        onPress={() =>
          navigation.navigate("Auth", {
            screen: "Home",
            params: { category: 9 },
          })
        }
      >
        <View style={styles.btnView}>
          <Text style={styles.btnText}>General Knowlege</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        title="Computers"
        style={styles.categoryButton}
        onPress={() =>
          navigation.navigate("Auth", {
            screen: "Home",
            params: { category: 17 },
          })
        }
      >
        <View style={styles.btnView}>
          <Text style={styles.btnText}>Computers</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        title="Nature"
        style={styles.categoryButton}
        onPress={() =>
          navigation.navigate("Auth", {
            screen: "Home",
            params: { category: 18 },
          })
        }
      >
        <View style={styles.btnView}>
          <Text style={styles.btnText}>Nature</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        title="Math"
        style={styles.categoryButton}
        onPress={() =>
          navigation.navigate("Auth", {
            screen: "Home",
            params: { category: 19 },
          })
        }
      >
        <View style={styles.btnView}>
          <Text style={styles.btnText}>Math</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        title="Mythology"
        style={styles.categoryButton}
        onPress={() =>
          navigation.navigate("Auth", {
            screen: "Home",
            params: { category: 20 },
          })
        }
      >
        <View style={styles.btnView}>
          <Text style={styles.btnText}>Mythology</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        title="Sports"
        style={styles.categoryButton}
        onPress={() =>
          navigation.navigate("Auth", {
            screen: "Home",
            params: { category: 21 },
          })
        }
      >
        <View style={styles.btnView}>
          <Text style={styles.btnText}>Sports</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        title="Geography"
        style={styles.categoryButton}
        onPress={() =>
          navigation.navigate("Auth", {
            screen: "Home",
            params: { category: 22 },
          })
        }
      >
        <View style={styles.btnView}>
          <Text style={styles.btnText}>Geography</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        title="History"
        style={styles.categoryButton}
        onPress={() =>
          navigation.navigate("Auth", {
            screen: "Home",
            params: { category: 23 },
          })
        }
      >
        <View style={styles.btnView}>
          <Text style={styles.btnText}>History</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        title="Politics"
        style={styles.categoryButton}
        onPress={() =>
          navigation.navigate("Auth", {
            screen: "Home",
            params: { category: 24 },
          })
        }
      >
        <View style={styles.btnView}>
          <Text style={styles.btnText}>Politics</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        title="Arts"
        style={styles.categoryButton}
        onPress={() =>
          navigation.navigate("Auth", {
            screen: "Home",
            params: { category: 25 },
          })
        }
      >
        <View style={styles.btnView}>
          <Text style={styles.btnText}>Arts</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export  function Auth() {
  const [count, setCount] = useState()
  
    // Create a reference to the Firestore collection
    const db2 = getFirestore();
    const collectionRef = collection(db2, 'questions'); // Replace 'questions' with the actual name of your collection

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef);
        // Get the number of documents in the collection
        const numberOfDocuments = querySnapshot.size;
        setCount(numberOfDocuments)
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };
    fetchData();

  
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#F5F5F5",
        }}
      >

      </View>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            let rn = route.name;

            if (rn == homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn == notesName) {
              iconName = focused ? "clipboard" : "clipboard-outline";
            } else if (rn == settingsScreen) {
              iconName = focused ? "list" : "list-outline";
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },
          tabBarStyle: {
            height: 55,
          },
          tabBarActiveTintColor: "#1f2032",
          tabBarInactiveTintColor: "#1f2032",
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        })}
      >
        <Tab.Screen
          name={notesName}
          component={NotesScreen}
          options={{ tabBarBadge: count === 0 ? null : count }}
        />
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={settingsScreen} component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
}

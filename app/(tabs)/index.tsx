import "@/global.css"
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
 
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-bold font-sans-extrabold">Home</Text>
      
      <Link href="/onboarding" className="mt-4 font-sans-bold rounded bg-primary text-white p-4"> Go to onbarding </Link>
      <Link href="/(auth)/sign-in" className="mt-4 font-sans-bold rounded bg-primary text-white p-4"> Go to SignIn </Link>
      <Link href="/(auth)/sign-up" className="mt-4 font-sans-bold rounded bg-primary text-white p-4"> Go to SignUp </Link>
    </SafeAreaView>
  );
}
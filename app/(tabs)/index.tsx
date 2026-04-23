import "@/global.css"
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
 
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5 justify-center items-center">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4"> Go to onbarding </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4"> Go to SignIn </Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4"> Go to SignUp </Link>

      <Link href="/subscriptions/spotify">Spotify Subscriptions</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: {id: "claude"}
        }}
      >
        Calude Max Subscriptions
      </Link>
    </SafeAreaView>
  );
}
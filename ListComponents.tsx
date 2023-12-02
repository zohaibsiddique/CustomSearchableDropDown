import {Text, Box, Center, ChevronDownIcon, Icon, Input, InputField, Pressable, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, ArrowUpIcon, ArrowDownIcon, HStack, Popover, PopoverBackdrop, PopoverContent, PopoverHeader, Heading, PopoverCloseButton, CloseIcon, PopoverBody, Button, ButtonText, FlatList, Avatar, AvatarImage, VStack } from "@gluestack-ui/themed";
import { countries } from "./countries_list";

export default function ListComponents() {

    return(
        
        <Box py="$10">
            <FlatList
                data={countries}
                renderItem={({ item }) => (
                    <Text borderBottomWidth="$2" p="$2" borderColor="$secondary100">
                        {item.country}
                    </Text>
                )}
                keyExtractor={(item) => item.country}
            />
        </Box>
    );
}
import {Text, Box, Center, ChevronDownIcon, Icon, Input, InputField, Pressable, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, ArrowUpIcon, ArrowDownIcon, HStack, Popover, PopoverBackdrop, PopoverContent, PopoverHeader, Heading, PopoverCloseButton, CloseIcon, PopoverBody, Button, ButtonText, VStack, FlatList } from "@gluestack-ui/themed";
import { useEffect, useRef, useState } from "react";

export default function CustomDrowDown({list}) {

    const[search, setSearch] = useState('')
    const[data, setData] = useState(list)
    const[listData, setListData] = useState(list)
    const[selectedCountry, setSelectedCountry] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const recyclerRef = useRef(null);
    const onSearch = (search: string) => {
      if (search !== '') {
        let tempData = data.filter(item => {
          return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
        setListData(tempData);
      } else {
        setListData(list);
      }
    };
    const handleOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <VStack alignItems="center" pt="$20" pl='$16'>
            <Box>
                <Popover
                    isOpen={isOpen}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    placement="bottom"
                    size="md"
                    trigger={(triggerProps) => {
                        return (
                            <Pressable  {...triggerProps}>
                                <HStack borderWidth="$2" p="$2" borderRadius="$md" alignItems="center">
                                    <Text mr="$8">
                                        {selectedCountry == '' ? 'Select Country' : selectedCountry}
                                    </Text>
                                    <Icon as={ArrowDownIcon} />
                                </HStack>
                            </Pressable>
                        )
                    }}
                >
                    <PopoverBackdrop />
                    <PopoverContent>
                    <PopoverHeader>
                        <Input w="92%" variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
                            <InputField placeholder='Search' onChangeText={txt => {
                                onSearch(txt);
                            }}/>
                        </Input>
                        <PopoverCloseButton>
                            <Icon as={CloseIcon} />
                        </PopoverCloseButton>
                    </PopoverHeader>
                    <PopoverBody>
                        <Box py="$10">
                            <FlatList
                                data={listData}
                                renderItem={({ item }) => (
                                    <Pressable onPress={() => {
                                        setSelectedCountry(item.country);
                                        onSearch('');
                                        setSearch('');
                                        handleClose();
                                    }}>
                                        <Text style={{fontWeight: '600'}}>{item.country}</Text>
                                    </Pressable>
                                )}
                                keyExtractor={(item) => item.country}
                            />
                        </Box>
                    </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>
        </VStack>


    );








}
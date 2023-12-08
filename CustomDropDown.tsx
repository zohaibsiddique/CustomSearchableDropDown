import { Text, Box, Center, ChevronDownIcon, Icon, Input, InputField, Pressable, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, ArrowUpIcon, ArrowDownIcon, HStack, Popover, PopoverBackdrop, PopoverContent, PopoverHeader, Heading, PopoverCloseButton, CloseIcon, PopoverBody, Button, ButtonText, VStack, FlatList } from "@gluestack-ui/themed";
import { useCallback, useEffect, useRef, useState } from "react";
import { countries } from "./countries_list";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
export default function CustomDrowDown() {
    const [isFound, setIsFound] = useState(true)
    const [search, setSearch] = useState('')
    const [data, setData] = useState(countries)
    const [listData, setListData] = useState(countries)
    const [selectedCountry, setSelectedCountry] = useState('')
    const searchRef = useRef()
    const [isOpen, setIsOpen] = useState(false)
    const recyclerRef = useRef(null);
    const onSearch = (search: string) => {
        if (search !== '') {
            let tempData = data.filter(item => {
                return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
            if (tempData.length > 0) {
                setListData(tempData);

                console.log(tempData)
            } else {
                setIsFound(false)
            }
            
        } else {
             setListData(countries);
        }
        recyclerRef.current.scrollToTop();
    };
    const handleOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
        setIsFound(true)
        setListData(countries)
    }
    const layoutProvider = new LayoutProvider(
        (index) => index,
        (_, dim) => {
            dim.width = 150;
            dim.height = 30;
        }
    );
    const dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(listData);


    const rowRenderer = (_, rowData) => {
        return (
            <Pressable onPress={() => handleCountrySelect(rowData.country)}>
                <Box >
                    <Text>{rowData.country}</Text>
                </Box>
            </Pressable>
        );
    };


    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

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
                    <PopoverContent py='$2'>
                        <PopoverHeader>
                            <Input w="92%" variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
                                <InputField placeholder='Search' onChangeText={txt => {
                                    onSearch(txt);
                                }} />
                            </Input>
                            <PopoverCloseButton>
                                <Icon as={CloseIcon} />
                            </PopoverCloseButton>
                        </PopoverHeader>
                        <PopoverBody h='100%'>
                            <Box py="$10" height='$48' width='60%'>
                                {
                                    isFound?  <RecyclerListView
                                    ref={recyclerRef}
                                    layoutProvider={layoutProvider}
                                    dataProvider={dataProvider}
                                    rowRenderer={rowRenderer}
                                    renderAheadOffset={500}

                                />: <Text>No match found</Text>
                                }
                               
                            </Box>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>
        </VStack>

    );





}
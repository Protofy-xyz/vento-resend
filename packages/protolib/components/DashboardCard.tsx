import { ReactNode, useState } from "react";
import { Tinted } from './Tinted';
import { StackProps, XStack, YStack, Text, Paragraph } from '@my/ui';

interface DashboardCardProps {
    children: ReactNode;
    id: string;
    title?: string;
    titleProps?: StackProps;
    containerProps?: StackProps;
    cardActions?: ReactNode;
}

export const DashboardCard = ({ children, id, title, cardActions = <></>, titleProps = {}, containerProps = {} }: DashboardCardProps) => {
    const [hovered, setHovered] = useState(false);
    return (
        <Tinted>
            <YStack
                cursor="default" 
                onHoverIn={() => setHovered(true)}
                onHoverOut={() => setHovered(false)}
                key={id}
                borderRadius={10}
                backgroundColor="$bgPanel"
                flex={1}
                {...containerProps}
                style={{ height: '100%', overflow: 'hidden', ...containerProps.style }}
            >

                {(title || cardActions) && <XStack
                    w="100%"
                    btrr={9}
                    btlr={9}
                    mt={10}
                    h={20}
                    ai="center"
                    {...titleProps}
                >
                {title ? (
                    <Paragraph flex={1} fow="500" textOverflow={"ellipsis"} textAlign="center" overflow="hidden" whiteSpace={"nowrap"}fos={"$4"}>{title}</Paragraph>
                ) : null}
                    <XStack position="absolute" right={0} className="no-drag" mr="$3.5" opacity={hovered? 0.75 : 0} pressStyle={{ opacity: 0.9 }}>
                        {cardActions}
                    </XStack>
                </XStack>}

                <YStack
                    flex={1}
                    style={{ overflowY: 'auto', maxHeight: '100%' }}
                >
                    {children}
                </YStack>
            </YStack>
        </Tinted>
    );
}

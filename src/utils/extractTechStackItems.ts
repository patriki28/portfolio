/* eslint-disable @typescript-eslint/no-explicit-any */
export function extractTechStackItems(blocks: any[]): string[] {
    const text = blocks
        .filter((block) => block._type === 'block')
        .map(
            (block) =>
                block.children?.map((child: any) => child.text).join('') ?? '',
        )
        .join(' ');

    return text
        .split(',')
        .map((item) => item.trim())
        .filter((item) => item.length > 0);
}

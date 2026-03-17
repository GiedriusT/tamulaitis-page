// This is one ugly ass file with some warning supressed, it gets text from
// Astro slots but I couldn't find any documentation how to use it properly.
// Does the job for now, hope can find correct solution some day.

/* eslint-disable @typescript-eslint/no-explicit-any */
export function extractTextContent(children: any): string {
  if (children && typeof children === 'object') {
    if (children.props && children.props.value) {
      return children.props.value.toString();
    }
  }

  return children?.toString() || '';
}
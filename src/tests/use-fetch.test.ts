import { renderHook, suppressErrorOutput  } from "@testing-library/react-hooks";
import { useFetch } from "../hooks/use-fetch";

test('should handle thrown error', () => {
    const restoreConsole = suppressErrorOutput()
    try {
      const { result } = renderHook(() => useFetch('https://imdb8.p.rapidapi.com/auto-complete?q=The','filter', false))
      expect(result.current).toBeTruthy();
      expect(result.error).toBeFalsy();
    } finally {
      restoreConsole()
    }
  })
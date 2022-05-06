class TrieNode:
    def __init__(self):
        self.next = {}
        self.isEnd = False 
        
class WordFilter:

    def __init__(self, words: List[str]):
        self.root = TrieNode()
        self.indexMap = {word:i for i, word in enumerate(words)}
        for word in words:
            self.add("#" + word, self.root)
            for i in range(len(word)):
                self.add(word[-i:] + "#" + word, self.root)
        
    def add(self, word, root):
        cur = root
        for ch in word:
            if ch not in cur.next:
                cur.next[ch] = TrieNode()
            cur = cur.next[ch]    
        cur.isEnd = True         
        
    def dfs_findLongest(self, cur, path):
        if cur.isEnd: 
            return self.indexMap["".join(path)]
        res = -1
        for ch in cur.next:
            path.append(ch)
            res = max(res, self.dfs_findLongest(cur.next[ch], path) )
            path.pop() 
        return res 
    def f(self, prefix: str, suffix: str) -> int:
        
        cur = self.root
        for ch in suffix:
            if ch not in cur.next:
                return -1
            cur = cur.next[ch]
        if "#" not in cur.next:
            return -1
        
        cur = cur.next["#"]    
        for ch in prefix: 
            if ch not in cur.next:
                return -1
            cur = cur.next[ch]    
            
        path = [prefix]    
        return self.dfs_findLongest(cur, path)
    
# Your WordFilter object will be instantiated and called as such:
# obj = WordFilter(words)
# param_1 = obj.f(prefix,suffix)
